class ChatRoom {
  constructor() {
    this.usuarios = [];
  }

  agregarUsuario(usuario) {
    this.usuarios.push(usuario);
  }

  enviar(mensaje, emisor) {
    this.usuarios.forEach(u => {
      if (u !== emisor) {
        u.recibir(mensaje);
      }
    });
  }
}

class Usuario {
  constructor(nombre, chat) {
    this.nombre = nombre;
    this.chat = chat;
  }

  enviar(mensaje) {
    this.chat.enviar(`${this.nombre}: ${mensaje}`, this);
  }

  recibir(mensaje) {
    console.log(mensaje);
  }
}

const chat = new ChatRoom();

const user1 = new Usuario("Ana", chat);
const user2 = new Usuario("Juan", chat);

chat.agregarUsuario(user1);
chat.agregarUsuario(user2);

user1.enviar("Hola!");