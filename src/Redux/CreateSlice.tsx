import { db } from "@/app/config";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
import { doc, getDoc, setDoc, collection } from "firebase/firestore";

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


    setUserCartAndWishlist(state, action: PayloadAction<{ cartData: Product[], wishListData: Product[] }>) {
      state.cartData = action.payload.cartData;
      state.wishListData = action.payload.wishListData;
      state.totalProductInCart = action.payload.cartData.length;
      state.totalProductInWishlist = action.payload.wishListData.length;
    },

    addToCart(state) {
      state.added = !state.added;
      console.log("redux called", state.added);
    },

    addtocartData(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const isThere = state.cartData.find((itemm) => itemm.id === item.id);
      if (!isThere) {
        state.cartData = [...state.cartData, item];
      }
    },

    deleteFromCart(state, action: PayloadAction<Product>) {
      const item = action.payload;
      state.cartData = state.cartData.filter((itemm) => itemm.id !== item.id);
      state.totalProductInCart -= 1;
    },

    deleteFromWishlist(state, action: PayloadAction<Product>) {
      const item = action.payload;
      state.wishListData = state.wishListData.filter(
        (itemm) => itemm.id !== item.id
      );
    },

    addtoWishlistData(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const inWish = state.wishListData.find((items) => items.id === item.id);
      if (!inWish) {
        state.wishListData = [...state.wishListData, item];
      }
    },

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

    productInWishlist(state) {
      state.totalProductInWishlist = state.wishListData.length;
    },

    ProductInCart(state) {
      state.totalProductInCart = state.cartData.length;
      console.log("total product", state.totalProductInCart);
    },
    
  },
});

export const fetchUserCartAndWishlist = (userId: string) => async (dispatch: any) => {
  const cartRef = doc(db, "users", userId, "cart", "data");
  const wishlistRef = doc(db, "users", userId, "wishlist", "data");

  try{

  const cartSnap = await getDoc(cartRef);
  console.log("CartSnap :", cartSnap.data());
  const wishlistSnap = await getDoc(wishlistRef);
  console.log("WishlistSnap:", wishlistSnap.data());

  const cartData = cartSnap.exists() ? cartSnap.data().items : [];
  const wishListData = wishlistSnap.exists() ? wishlistSnap.data().items : [];


  console.log("Fetched Cart Data:", cartData);
  console.log("Fetched Wishlist Data:", wishListData);

  dispatch(setUserCartAndWishlist({ cartData, wishListData }));
  }catch(error){
    console.log("Error fetching cart  and wishlist data");
  }
  
}; 
export const saveUserCartAndWishlist = (userId: string, cartData: Product[], wishListData: Product[]) => async () => {
 
  try {
    const userId = getCookie('token');
    const cartRef = doc(db, "users", userId, "cart", "data");
    const wishlistRef = doc(db, "users", userId, "wishlist", "data");
    console.log("inside redux")

    await setDoc(cartRef, { items: cartData });
    await setDoc(wishlistRef, { items: wishListData });
    
    console.log("Documents created successfully.");
  } catch (error) {
    console.error("Error creating document:", error);
  }
};

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
  setUserCartAndWishlist,
  
} = cartSlice.actions;
export default cartSlice.reducer;
