const bcrypt = require('bcrypt')
const imgur = require('imgur-node-api')
const db = require('../models')
const sequelize = require('sequelize')
const User = db.User
const Category = db.Category
const PreferedCategory = db.PreferedCategory
const Favorite = db.Favorite
const Restaurant = db.Restaurant
const Like = db.Like

// JWT
const jwt = require('jsonwebtoken')

const userController = {
  signIn: (req, res) => {
    // 檢查email,password
    if (!req.body.email || !req.body.password) {
      return res.json({ status: 'error', message: "required fields didn't exist" })
    }
    // 檢查 user 是否存在與密碼是否正確
    const email = req.body.email
    const password = req.body.password

    User.findOne({ where: { email } })
      .then(user => {
        if (!user) return res.status(401).json({ status: 'error', message: 'EMAIL OR PASSWORD ERROR' })
        if (!bcrypt.compareSync(password, user.password)) {
          return res.status(401).json({ status: 'error', message: 'EMAIL OR PASSWORD ERROR' })
        }

        const paylod = { id: user.id }
        const token = jwt.sign(paylod, process.env.JWT_SECRET)
        user.password = undefined
        return res.json({
          status: 'success',
          message: 'ok',
          token,
          user
        })
      })
  },

  signUp: (req, res) => {
    const { email, password, passwordConfirm, name } = req.body
    if (!email || !password || !passwordConfirm || !name) {
      return res.json({
        status: 'error',
        message: '所有欄位皆為必填',
        email,
        name
      })
    }
    if (password !== passwordConfirm) {
      return res.json({
        status: 'error',
        message: '兩次密碼輸入不同',
        email,
        name
      })
    } else {
      User.findOne({ where: { email } })
        .then(user => {
          if (user) {
            return res.json({
              status: 'error',
              message: '此信箱已被使用，請直接登入使用',
              name,
              email,
              password,
              passwordConfirm
            })
          } else {
            User.create({
              name,
              email,
              password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null),
              avatar: 'https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256__340.png'
            })
              .then(() => {
                return res.json({
                  status: 'success',
                  message: '帳號註冊成功！'
                })
              })
          }
        })
    }
  },

  getCurrentUser: (req, res, callback) => {
    const user = req.user
    user.password = undefined
    return res.json(user)
  },

  getProfile: (req, res) => {
    Promise.all([
      User.findOne({
        where: { id: req.params.id },
        attributes: {
          include: [
            [sequelize.literal('(SELECT name FROM restaurant_reservation.Districts WHERE Districts.id = User.DistrictId)'), 'DistrictName']
          ]
        }
      }),
      PreferedCategory.findAll({
        where: { UserId: req.params.id },
        attributes: {
          include: [
            [sequelize.literal('(SELECT name FROM restaurant_reservation.Categories WHERE Categories.id = PreferedCategory.CategoryId)'), 'CategorytName']
          ]
        }
      })
    ])
      .then(([user, preferedCategory]) => {
        return res.json({ ...user.dataValues, preferedCategory: preferedCategory.map(p => p.dataValues.CategorytName) })
      })
  },

  putProfile: (req, res) => {
    const UserId = req.params.id
    const { body: { name, gender, email, phoneNumber, DistrictId }, file } = req
    if (file) {
      imgur.setClientID(process.env.IMGUR_CLIENT_ID)
      imgur.upload(file.path, (err, img) => {
        if (err) {
          console.log(err)
          return
        }
        return User.findByPk(UserId)
          .then(user => {
            user.update({
              name,
              gender,
              email,
              phone_number: phoneNumber,
              DistrictId: !DistrictId ? null : DistrictId,
              avatar: file ? img.data.link : user.avatar
            }).then((user) => {
              res.json({ status: 'success', message: '[HAS FILE] user was successfully to update' })
            })
          })
      })
    } else {
      User.findByPk(UserId)
        .then(user => {
          user.update({
            name,
            gender,
            email,
            phone_number: phoneNumber,
            DistrictId: !DistrictId ? null : DistrictId
          }).then((user) => {
            res.json({ status: 'success', message: '[NO file update] user was successfully to update' })
          })
        })
    }
  },

  putPreferedCategory: (req, res) => {
    PreferedCategory.destroy({
      where: { UserId: req.params.id }
    })
      .then(() => {
        Category.findAll({
          where: { name: req.body.preferedCategory }
        })
          .then((category) => {
            const promises = category.map((data) => {
              return PreferedCategory.create({
                UserId: req.params.id,
                CategoryId: data.id
              })
            })
            Promise.all(promises)
              .then(() => {
                return res.json({ status: 'success', message: 'preferedCategory was successfully to update' })
              })
          })
      })
      .catch(err => {
        console.log(err)
      })
  },

  getFavorites: (req, res) => {
    const UserId = req.user.id
    Favorite.findAll({ where: { UserId }, include: [{ model: Restaurant }] })
      .then(favorite => {
        return res.json(favorite)
      })
  },

  addFavorite: (req, res) => {
    const UserId = req.user.id
    const restaurantId = req.body.id
    Favorite.create({
      UserId,
      RestaurantId: restaurantId
    }).then(favorite => { res.json({ status: 'success', message: 'Restaurant was successfully to add in your favorite list' }) })
  },

  deleteFavorite: (req, res) => {
    const restaurantId = req.params.restaurantId
    Favorite.findOne({ where: { RestaurantId: restaurantId } })
      .then(favorite => {
        favorite.destroy()
          .then(() => { res.json({ status: 'success', message: 'Restaurant was successfully to remove from your favorite list' }) })
      })
  },

  likeComment: (req, res) => {
    const UserId = req.user.id
    const commentId = req.body.commentId
    Like.create({
      UserId,
      CommentId: commentId
    }).then(like => { return res.json({ status: 'success', message: 'Liked comment' }) })
  },

  disLikeComment: (req, res) => {
    const commentId = req.params.commentId
    Like.findOne({ where: { CommentId: commentId } })
      .then(dislike => {
        dislike.destroy()
          .then(() => { return res.json({ status: 'success', message: 'Disliked comment' }) })
      })
  }

}

module.exports = userController
