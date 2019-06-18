 create database loja;
  use loja;
  create table produtos(
      id int auto_increment primary key,
      descricao varchar(100),
      precoinicial decimal(6,2),
      linkimg varchar(200)
  );

  INSERT INTO produtos(descricao, precoinicial, linkimg) VALUES 
  ("Playstation 4", 4000.99, "https://i.imgur.com/NxFfiWo.png"),
  ("Xbox One", 3500.99, "https://i.imgur.com/5SNroyj.jpg"),
  ("Nintendo Switch", 4550.99, "https://i.imgur.com/wSUmKT1.jpg"),
  ("Wii U", 2050.99, "https://i.imgur.com/XaHABuJ.jpg"),
  ("Nintendo DS", 2500.99, "https://i.imgur.com/Y8DEXQp.png");