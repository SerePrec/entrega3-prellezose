import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const viewsPath = path.join(__dirname, "..", "views");

export const getProducts = (req, res) => {
  const { user } = req;
  res.render("pages/productos", {
    title: "Mammoth Bike Store | Productos",
    username: user.provider ? user.emails[0].value : user.username,
    avatar: user.provider ? user.photos[0].value : user.avatar
  });
};

export const getAdminProducts = (req, res) => {
  res.sendFile("productos-admin.html", { root: viewsPath });
};

export const getCart = (req, res) => {
  const { user } = req;
  res.render("pages/carrito", {
    title: "Mammoth Bike Store | Carrito",
    username: user.provider ? user.emails[0].value : user.username,
    avatar: user.provider ? user.photos[0].value : user.avatar
  });
};

export const getAdminCarts = (req, res) => {
  res.sendFile("carritos-admin.html", { root: viewsPath });
};

export const getCheckout = (req, res) => {
  const { user } = req;
  res.render("pages/checkout", {
    title: "Mammoth Bike Store | Checkout",
    username: user.provider ? user.emails[0].value : user.username,
    name: user.provider ? user.displayName : user.name,
    address: user.provider ? "" : user.address,
    phone: user.provider ? "" : user.phone,
    avatar: user.provider ? user.photos[0].value : user.avatar
  });
};

export const getUsersChat = (req, res) => {
  const { email } = req.params;
  const { user } = req;
  const options = {
    title: `Mammoth Bike Store | Chat`,
    username: user.provider ? user.emails[0].value : user.username,
    avatar: user.provider ? user.photos[0].value : user.avatar
  };
  if (email) {
    res.render("pages/chat-user", options);
  } else {
    res.render("pages/chat", options);
  }
};

export const getAdminChat = (req, res) => {
  res.render("pages/chat-admin", { title: "Administrador de mensajes" });
};
