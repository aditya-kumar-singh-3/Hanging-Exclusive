import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for the product and cart states
interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  quantity: number;
  subtotal: number;
}

interface CartState {
  cartData: Product[];
  wishListData: Product[];
  totalProductInCart: number;
  added: boolean;
  quantity: number;
  totalProductInWishlist: number;
}

// Initial state type
const initialState: CartState = {
  cartData: [],
  wishListData: [],
  totalProductInCart: 0,
  added: false,
  quantity: 1,
  totalProductInWishlist: 0,
};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    // Toggles the added state (used for UI notifications, etc.)
    addToCart(state) {
      state.added = !state.added;
      console.log("redux called", state.added);
    },

    // Adds the product to the cartData array
    addtocartData(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const isThere = state.cartData.find((itemm) => itemm.id === item.id);
      if (!isThere) {
        state.cartData = [...state.cartData, item];
      }
    },

    // Deletes a product from the cart
    deleteFromCart(state, action: PayloadAction<Product>) {
      const item = action.payload;
      state.cartData = state.cartData.filter((itemm) => itemm.id !== item.id);
      state.totalProductInCart -= 1;
    },

    // Deletes a product from the wishlist
    deleteFromWishlist(state, action: PayloadAction<Product>) {
      const item = action.payload;
      state.wishListData = state.wishListData.filter((itemm) => itemm.id !== item.id);
    },

    // Adds a product to the wishlist
    addtoWishlistData(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const inWish = state.wishListData.find((items) => items.id === item.id);
      if (!inWish) {
        state.wishListData = [...state.wishListData, item];
      }
    },

    // Moves all wishlist products to the cart
    moveToCart(state) {
      state.wishListData.forEach((wishlistItem) => {
        const itemInCart = state.cartData.find(
          (cartItem) => cartItem.id === wishlistItem.id
        );
        if (!itemInCart) {
          state.cartData.push(wishlistItem);
        }
      });
      state.wishListData = [];
      state.totalProductInWishlist = 0;
    },

    // Moves a single product from the wishlist to the cart
    singlemovetocart(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const cartItem = state.cartData.find((itemm) => item.id === itemm.id);
      if (!cartItem) {
        state.cartData.push(item);
      }
      state.wishListData = state.wishListData.filter(
        (itum) => itum.id !== item.id
      );
      state.totalProductInWishlist -= 1;
    },

    // Increments the quantity of a product in the cart
    UPquantity(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const existingItem = state.cartData.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem && existingItem.quantity < 10) {
        existingItem.quantity += 1;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
        console.log(existingItem.subtotal);
      }
    },

    // Decrements the quantity of a product in the cart
    DownQuantity(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const existingItem = state.cartData.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
        console.log(existingItem.subtotal);
      }
    },

    // Logs product info (for debugging)
    info(state, action: PayloadAction<Product>) {
      const item = action.payload;
      console.log("HIIIIIIIIIIIIIII", item);
    },

    // Updates the total number of products in the wishlist
    productInWishlist(state) {
      state.totalProductInWishlist = state.wishListData.length;
    },

    // Updates the total number of products in the cart
    ProductInCart(state) {
      state.totalProductInCart = state.cartData.length;
      console.log("total product", state.totalProductInCart);
    },
  },
});

export const {
  addToCart,
  addtocartData,
  ProductInCart,
  UPquantity,
  addtoWishlistData,
  productInWishlist,
  moveToCart,
  deleteFromCart,
  deleteFromWishlist,
  singlemovetocart,
  info,
  DownQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
