import mongoose from "mongoose";

// Defining the Category schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

// Defining the Inventory schema
const inventorySchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

// Defining the Discount schema
const discountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    discount_percent: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

// Defining the Product schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    SKU: {
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId, // Reference to Category model
      ref: "Category", // Reference to the 'Category' model name
      required: true,
    },
    inventory: {
      type: mongoose.Schema.Types.ObjectId, // Reference to Inventory model
      ref: "Inventory", // Reference to the 'Inventory' model name
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: mongoose.Schema.Types.ObjectId, // Reference to Discount model
      ref: "Discount", // Reference to the 'Discount' model name
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

// Models
const Product = mongoose.model("Product", productSchema);
const Category = mongoose.model("Category", categorySchema);
const Inventory = mongoose.model("Inventory", inventorySchema);
const Discount = mongoose.model("Discount", discountSchema);

// Export
export { Product, Category, Inventory, Discount };
