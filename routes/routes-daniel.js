
const db = require('../database/connection.js');
const express = require('express');
const router = express.Router();




const UsersController = require('../controllers/users.js');
const InterestsController = require('../controllers/interests.js');
const User_interestsController = require('../controllers/user_interests.js');
const PostsController = require('../controllers/posts.js');
const CommentController = require('../controllers/comment.js');
const ForumController = require('../controllers/forum.js');
const Forum_interactionsController = require('../controllers/forum_interactions.js');
const FriendsController = require('../controllers/friends.js');
const ChatsController = require('../controllers/chats.js');

router.get('/users', UsersController.listarUsers);
router.post('/users', UsersController.cadastrarUsers);
router.patch('/users', UsersController.editarUsers);
router.delete('/users', UsersController.apagarUsers);



router.get('/interests', InterestsController.listarInterests);
router.post('/interests', InterestsController.cadastrarInterests);
router.patch('/interests', InterestsController.editarInterests);
router.delete('/interests', InterestsController.apagarInterests);



router.get('/user_interests', User_interestsController.listarUser_interests);
router.post('/user_interests', User_interestsController.cadastrarUser_interests);
router.patch('/user_interests', User_interestsController.editarUser_interests);
router.delete('/user_interests', User_interestsController.apagarUser_interests);



router.get('/posts', PostsController.listarPosts);
router.post('/posts', PostsController.cadastrarPosts);
router.patch('/posts', PostsController.editarPosts);
router.delete('/posts', PostsController.apagarPosts);



router.get('/comment', CommentController.listarComment);
router.post('/comment', CommentController.cadastrarComment);
router.patch('/comment', CommentController.editarComment);
router.delete('/comment', CommentController.apagarComment);


router.get('/forum', ForumController.listarForum);
router.post('/forum', ForumController.cadastrarForum);
router.patch('/forum', ForumController.editarForum);
router.delete('/forum', ForumController.apagarForum);


router.get('/forum_interactions', Forum_interactionsController.listarForum_interactions);
router.post('/forum_interactions', Forum_interactionsController.cadastrarForum_interactions);
router.patch('/forum_interactions', Forum_interactionsController.editarForum_interactions);
router.delete('/forum_interactions', Forum_interactionsController.apagarForum_interactions);


router.get('/friends', FriendsController.listarFriends);
router.post('/friends', FriendsController.cadastrarFriends);
router.patch('/friends', FriendsController.editarFriends);
router.delete('/friends', FriendsController.apagarFriends);


router.get('/chats', ChatsController.listarChats);
router.post('/chats', ChatsController.cadastrarChats);
router.patch('/chats', ChatsController.editarChats);
router.delete('/chats', ChatsController.apagarChats);





module.exports = router;