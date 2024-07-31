
const express = require('express');
const router = express.Router();
const managerController = require('../controllers/managerController');

// נתיב להצגת דף הניהול
router.get('/manager', (req, res) => {
    res.render('manager');
});

// נתיבים לקבלת הנתונים מה-DB
router.get('/manager/api/ski-products', managerController.getSkiProducts);
router.get('/manager/api/clothes', managerController.getClothes);
router.get('/manager/api/accessories', managerController.getAccessories);
router.get('/manager/api/users', managerController.getUsers);

//updating the product
router.put('/manager/api/update/:id', managerController.updateProduct);

//delete product
router.delete('/manager/api/delete/:id', managerController.deleteProduct);

//upload product
router.post('/manager/api/upload/:model', managerController.uploadProduct);

//search product
router.get('/manager/api/search', managerController.searchProduct);

// חיפוש משתמש לפי username
router.get('/manager/api/search-user', managerController.searchUser);

// עדכון משתמש
router.put('/manager/api/update-user/:username', managerController.updateUser);

// מחיקת משתמש
router.delete('/manager/api/delete-user/:username', managerController.deleteUser);

//get orders
router.get('/manager/api/orders', managerController.getOrders);

router.get('/manager/api/branches', managerController.getBranches);


module.exports = router;


