const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Comments = require('./comments.models')
const Likes = require('./likes.models')
const Posts = require('./posts.models')
const Follows = require('./follows.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    Users.hasMany(Posts)
    Posts.belongsTo(Users)

    Users.hasMany(Likes)
    Likes.belongsTo(Users)

    Posts.hasMany(Likes)
    Likes.belongsTo(Posts)

    Users.hasMany(Follows)
    Follows.belongsTo(Users, {
        as: 'Following',
        foreignKey: 'userId2'
    })

    Follows.belongsTo(Users, {
        as: 'folowers',
        foreignKey: 'userId'
    })
}

module.exports = initModels
