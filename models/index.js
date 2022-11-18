// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: "category_id",
  }),

// Categories have many Products
//Define a Category having many products, thus creating a foreign key in the "Product" table

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",

})

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  
  through: {
    model: ProductTag,
    unique: false
  },

  //define an alias for when data is retrived
   foreignKey: "product_id",


})

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },

 foreignKey: "tag_id",
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
