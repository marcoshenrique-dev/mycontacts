CREATE DATABASE myContacts; --> criando database

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; --> adicionando extensão para uso do uuid caso não exista

Create TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
); --> criando tabela de categorias caso não exista
