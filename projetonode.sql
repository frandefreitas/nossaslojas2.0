-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 26-Abr-2019 às 20:46
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projetonode`
--



-- --------------------------------------------------------

--
-- Estrutura da tabela `cidade`
--

USE projetonode;

CREATE TABLE `cidade` (
  `id` int(11) NOT NULL,
  `idEstado` int(11) DEFAULT NULL,
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cidade`
--

INSERT INTO `cidade` (`id`, `idEstado`, `nome`) VALUES
(1, 5, 'Saint Germain'),
(2, 4, '3940304'),
(3, 4, 'Santo Augusto'),
(5, 10, 'dsdsdds'),
(6, NULL, ''),
(7, NULL, ''),
(8, NULL, ''),
(9, NULL, 'Porto Sul'),
(36, 10, 'Porto Leste');

-- --------------------------------------------------------

--
-- Estrutura da tabela `estado`
--

CREATE TABLE `estado` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sigla` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `estado`
--

INSERT INTO `estado` (`id`, `nome`, `sigla`) VALUES
(1, 'Santo Pablo do Sul', 'PS'),
(2, 'Goiabatiçuba', 'GB'),
(3, 'São Paulo', 'SP'),
(4, 'Rio Grande do Sul', 'RS'),
(5, 'Guanabara', 'GB'),
(6, 'Rio de Janeiro', 'RJ'),
(7, 'Pernanbuco', 'PE'),
(8, 'Tilanbuco', 'TI'),
(10, 'Maranceupadro', 'MD'),
(15, 'Zamalec', 'ZA'),
(16, 'Zamaleka', 'ZK'),
(18, 'São Carlos', 'CL'),
(53, 'Rio Grande do Leste', 'RL');

-- --------------------------------------------------------

--
-- Estrutura da tabela `loja`
--

CREATE TABLE `loja` (
  `id` int(11) NOT NULL,
  `horario` varchar(255) NOT NULL,
  `idCidade` int(11) DEFAULT NULL,
  `endereco` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `cnpj` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `loja`
--

INSERT INTO `loja` (`id`, `horario`, `idCidade`, `endereco`, `telefone`, `cnpj`) VALUES
(22, '12:29', 1, 'Aaaaaaaaa', '12345567', '12345678901234'),
(24, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(27, '12:29', 2, 'Aaaaaaaaa', '12345567', '12345678901234'),
(28, '12:29', 2, 'Aaaaaaaaa', '12345567', '12345678901234'),
(29, '12:29', 2, 'Aaaaaaaaa', '12345567', '12345678901234'),
(30, '12:29', 2, 'Aaaaaaaaa', '12345567', '12345678901234'),
(31, '12:29', 2, 'Aaaaaaaaa', '12345567', '12345678901234'),
(32, '12:29', 2, 'Aaaaaaaaa', '12345567', '12345678901234'),
(33, '12:29', 2, 'Aaaaaaaaa', '12345567', '12345678901234'),
(34, '12:29', 2, 'Aaaaaaaaa', '12345567', '12345678901234'),
(35, '12:29', 3, 'Aaaaaaaaa', '12345567', '12345678901234'),
(36, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(37, '12:29', 2, 'Aaaaaaaaa', '12345567', '12345678901234'),
(38, '12:29', 1, 'Aaaaaaaaa', '12345567', '12345678901234'),
(39, '12:29', 2, 'Aaaaaadsdsaaa', '12345567', '12345678901234'),
(40, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(41, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(42, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(43, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(44, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(45, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(46, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(47, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(48, '19:29', 5, 'Rua do Menino Ney', '12345567', '12345678901234'),
(49, '19:29', 5, 'Rua do Menino Ney', '12345567', '12345678901234'),
(50, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(51, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(52, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(53, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(54, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(55, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(56, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(57, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(58, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(59, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(60, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(61, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(65, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(66, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(67, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(68, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(69, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234'),
(70, '12:29', 5, 'Aaaaaaaaa', '12345567', '12345678901234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cidade`
--
ALTER TABLE `cidade`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_899279ba6392aa6b05ac188c376` (`idEstado`);

--
-- Indexes for table `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loja`
--
ALTER TABLE `loja`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_c5e6e2358f05e22d72e9faf6aca` (`idCidade`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cidade`
--
ALTER TABLE `cidade`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `estado`
--
ALTER TABLE `estado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `loja`
--
ALTER TABLE `loja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `cidade`
--
ALTER TABLE `cidade`
  ADD CONSTRAINT `FK_899279ba6392aa6b05ac188c376` FOREIGN KEY (`idEstado`) REFERENCES `estado` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `loja`
--
ALTER TABLE `loja`
  ADD CONSTRAINT `FK_c5e6e2358f05e22d72e9faf6aca` FOREIGN KEY (`idCidade`) REFERENCES `cidade` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
