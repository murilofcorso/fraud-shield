create table usuarios(
	id_usuario int auto_increment primary key not null,
    nome varchar(100) not null,
    email varchar(100) not null,
    senha varchar(255) not null,
    data_cadastro datetime not null
);

create table padroes_suspeitos(
	id_padrao int auto_increment primary key  not null,
    tipo enum("palavra", "dominio", "expressao") not null,
    valor varchar(255) not null,
    descricao varchar(255) not null,
    nivel_risco enum("baixo", "medio", "alto") not null,
    data_cadastro datetime not null
);

create table mensagens_suspeitas(
	id_mensagem int auto_increment primary key not null,
    id_usuario int not null,
    conteudo text not null,
    nivel_risco enum("baixo", "medio", "alto") not null,
    origem enum("email", "sms", "whatsapp", "outro") not null,
    status enum("analisada", "pendente", "confirmada") not null,
    data_envio datetime not null,
    id_padrao int,
    foreign key (id_usuario) references usuarios(id_usuario),
    foreign key (id_padrao) references padroes_suspeitos(id_padrao)
);

create table analises(
	id_analise int auto_increment primary key not null,
    id_mensagem int not null,
    id_padrao int not null,
    pontuacao int not null,
    data_analise datetime not null,
    foreign key(id_mensagem) references mensagens_suspeitas(id_mensagem),
    foreign key (id_padrao) references padroes_suspeitos(id_padrao)
);

create table alertas_estatisticos(
	id_alerta int auto_increment primary key not null,
    tipo_alerta varchar(100) not null,
    valor_numerico float not null,
    data_registro datetime not null
);

