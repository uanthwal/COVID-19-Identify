-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema identify
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema identify
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `identify` DEFAULT CHARACTER SET utf8 ;
USE `identify` ;

-- -----------------------------------------------------
-- Table `identify`.`FIXED_QUESTIONS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `identify`.`FIXED_QUESTIONS` (
  `QUESTION_ID` INT NOT NULL AUTO_INCREMENT,
  `DAY` VARCHAR(45) NULL DEFAULT NULL,
  `QUESTION` VARCHAR(200) NULL DEFAULT NULL,
  `Q_TYPE` VARCHAR(10) NULL DEFAULT NULL,
  `OPTIONS` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`QUESTION_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `identify`.`USER_INFO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `identify`.`USER_INFO` (
  `USER_ID` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(45) NOT NULL,
  `DATE_OF_BIRTH` VARCHAR(45) NOT NULL,
  `ADDRESS` VARCHAR(45) NULL DEFAULT NULL,
  `POSTAL_CODE` VARCHAR(45) NOT NULL,
  `MOBILE_NUMBER` VARCHAR(10) NOT NULL,
  `GENDER` VARCHAR(45) NOT NULL,
  `EMAIL` VARCHAR(45) NULL DEFAULT NULL,
  `PASSWORD` VARCHAR(45) NOT NULL,
  `USER_TYPE` VARCHAR(45) NULL DEFAULT 'C',
  PRIMARY KEY (`USER_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `identify`.`HEALTH_TRACKER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `identify`.`HEALTH_TRACKER` (
  `TRACKER_ID` INT NOT NULL AUTO_INCREMENT,
  `USER_ID` INT NOT NULL,
  `CREATED_DATE` DATETIME NULL DEFAULT NULL,
  `TRACKER_STATUS` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`TRACKER_ID`, `USER_ID`),
  CONSTRAINT `F_KEY`
    FOREIGN KEY (`USER_ID`)
    REFERENCES `identify`.`USER_INFO` (`USER_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `identify`.`ANSWER_HISTORY`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `identify`.`ANSWER_HISTORY` (
  `ANSWER_ID` INT NOT NULL AUTO_INCREMENT,
  `TRACKER_ID` INT NULL,
  `DAY` VARCHAR(45) NULL,
  `QUESTION_ID` INT NULL,
  `ANSWER` VARCHAR(200) NULL,
  PRIMARY KEY (`ANSWER_ID`),
  INDEX `F_KEY_TRACKER_ID_idx` (`TRACKER_ID` ASC),
  INDEX `F_KEY_Q_ID_idx` (`QUESTION_ID` ASC),
  CONSTRAINT `F_KEY_TRACKER_ID`
    FOREIGN KEY (`TRACKER_ID`)
    REFERENCES `identify`.`HEALTH_TRACKER` (`TRACKER_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `F_KEY_Q_ID`
    FOREIGN KEY (`QUESTION_ID`)
    REFERENCES `identify`.`FIXED_QUESTIONS` (`QUESTION_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `identify`.`DAILY_TRACKER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `identify`.`DAILY_TRACKER` (
  `DAILY_TRACKER_ID` INT NOT NULL AUTO_INCREMENT,
  `TRACKER_ID` INT NULL,
  `DAY` VARCHAR(45) NULL,
  `DATA_RECORDED` VARCHAR(45) NULL,
  PRIMARY KEY (`DAILY_TRACKER_ID`),
  INDEX `F_KEY_idx` (`TRACKER_ID` ASC),
  CONSTRAINT `F_KEY_D_T_H_T`
    FOREIGN KEY (`TRACKER_ID`)
    REFERENCES `identify`.`HEALTH_TRACKER` (`USER_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `identify`.`USER_SESSION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `identify`.`USER_SESSION` (
  `INTERNAL_SESSION` INT NOT NULL AUTO_INCREMENT,
  `SESSION_ID` VARCHAR(100) NULL,
  `USER_ID` INT NULL,
  PRIMARY KEY (`INTERNAL_SESSION`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO `FIXED_QUESTIONS` (`QUESTION_ID`,`DAY`,`QUESTION`,`Q_TYPE`,`OPTIONS`) VALUES (1,'1','Which of the following symptoms are you currently experiencing? Select all that apply.','M','Fever,Shakes,Chills');
INSERT INTO `FIXED_QUESTIONS` (`QUESTION_ID`,`DAY`,`QUESTION`,`Q_TYPE`,`OPTIONS`) VALUES (2,'1','Have you traveled outside of Canada within the last 14 days?','S','Yes,No');
INSERT INTO `FIXED_QUESTIONS` (`QUESTION_ID`,`DAY`,`QUESTION`,`Q_TYPE`,`OPTIONS`) VALUES (101,'1','Additional comments for Day 1','O',NULL);

