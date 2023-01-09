# Реалізація інформаційного та програмного забезпечення

## В рамках проекту розробляється:  

### SQL-скрипт для створення на початкового наповнення бази даних  
```mysql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL,
  `name` ENUM('Respondent', 'Interviewer') NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`, `role_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_users_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`quizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`quizes` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `end_date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`questions` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `help_text` VARCHAR(45) NOT NULL,
  `required` TINYINT NOT NULL,
  `quizes_id` INT NOT NULL,
  PRIMARY KEY (`id`, `quizes_id`),
  INDEX `fk_questions_quizes1_idx` (`quizes_id` ASC) VISIBLE,
  CONSTRAINT `fk_questions_quizes1`
    FOREIGN KEY (`quizes_id`)
    REFERENCES `mydb`.`quizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`options`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`options` (
  `id` INT NOT NULL,
  `text` VARCHAR(45) NOT NULL,
  `iscorrect` TINYINT NULL,
  `questions_id` INT NOT NULL,
  PRIMARY KEY (`id`, `questions_id`),
  INDEX `fk_options_questions1_idx` (`questions_id` ASC) VISIBLE,
  CONSTRAINT `fk_options_questions1`
    FOREIGN KEY (`questions_id`)
    REFERENCES `mydb`.`questions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`results`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`results` (
  `id` INT NOT NULL,
  `options_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`, `options_id`, `users_id`),
  INDEX `fk_results_options1_idx` (`options_id` ASC) VISIBLE,
  INDEX `fk_results_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_results_options1`
    FOREIGN KEY (`options_id`)
    REFERENCES `mydb`.`options` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_results_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`State`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`State` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`action_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`actionType` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`actions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`actions` (
  `id` INT NOT NULL,
  `actedAt` DATETIME NOT NULL,
  `State_id` INT NOT NULL,
  `action_type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_actions_State1_idx` (`State_id` ASC) VISIBLE,
  INDEX `fk_actions_actionType1_idx` (`action_type_id` ASC) VISIBLE,
  CONSTRAINT `fk_actions_State1`
    FOREIGN KEY (`State_id`)
    REFERENCES `mydb`.`State` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`groups`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`groups` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `creatorId` INT NOT NULL,
  `actions_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `users_Roles_id` INT NOT NULL,
  `quizes_id` INT NOT NULL,
  PRIMARY KEY (`id`, `actions_id`, `users_id`, `users_Roles_id`, `quizes_id`),
  INDEX `fk_groups_actions1_idx` (`actions_id` ASC) VISIBLE,
  INDEX `fk_groups_users1_idx` (`users_id` ASC, `users_Roles_id` ASC) VISIBLE,
  INDEX `fk_groups_quizes1_idx` (`quizes_id` ASC) VISIBLE,
  CONSTRAINT `fk_groups_actions1`
    FOREIGN KEY (`actions_id`)
    REFERENCES `mydb`.`actions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_groups_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_groups_quizes1`
    FOREIGN KEY (`quizes_id`)
    REFERENCES `mydb`.`quizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

### REST-full сервіс для управління даними:

- `application.yml` - файл налаштування **Spring**-сервера та підключення до **MySQl** бази даних:
```yml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/mydb?useSSL=true
    username: root
    password: "12345678"
  jpa:
    properties:
      hibernate:
        ddl-auto: update
        dialect: org.hibernate.dialect.MySQL8Dialect
        show_sql: true
        temp:
          use_jdbc_metadata_defaults: false
```

- `ActionTypeEntity` - ORM-модель таблиці  `action_type` у базі даних `mydb`:
```kotlin
@Entity
@Table(name = "action_type")
class ActionTypeEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    var name: String = "",

    var description: String = ""
)
```
- `ActionTypeDto` - DTO-модель (Data Transfer Object) сутності `action_type`:
```kotlin
data class ActionTypeDto(
        val id: Int? = null,
        var name: String,
        var description: String
)
```
- `ActionTypeRepository` - CRUD-інтерфейс для сутності `ActionTypeEntity` із `Int`ідентифікатором:
```kotlin
import michigang1.me.rest.entity.ActionTypeEntity
import org.springframework.data.repository.CrudRepository
interface ActionTypeRepository : CrudRepository<ActionTypeEntity, Int>
```
- - -
- `package service` - сервісний рівень цього **Spring**-модуля, відповідаючий за реалізацію _Request_-функцій `ActionTypeRepository` для _DTO_-моделі:


- `ActionTypeServiceImpl`:
```kotlin
@Service
class ActionTypeServiceImpl(
    private val repository: ActionTypeRepository
) : ActionTypeService {

    override fun getAll(): List<ActionTypeDto>? {
        val list = repository.findAll().map { it.toDto() }
        return list.ifEmpty { throw ActionTypeEmptyTableApiException() }
    }

    override fun getById(id: Int): ActionTypeDto {
        return repository.findByIdOrNull(id)
            ?.toDto()
            ?: throw ActionTypeNotFoundApiException(id)
    }

    @Transactional
    override fun create(dto: ActionTypeDto): Int {
        val newEntity = repository.save(dto.toEntity())
        return newEntity.id
    }

    @Transactional
    override fun update(id: Int, dto: ActionTypeDto) {
        var existingEntity = repository.findByIdOrNull(id)
            ?: throw ActionTypeNotFoundApiException(id)

        existingEntity.name = dto.name
        existingEntity.description = dto.description

        existingEntity = repository.save(existingEntity)
    }

    override fun deleteById(id: Int) {
        val existingEntity = repository.findByIdOrNull(id)
            ?: throw ActionTypeNotFoundApiException(id)

        existingEntity.id.let { repository.deleteById(it) }
    }

    private fun ActionTypeEntity.toDto(): ActionTypeDto =
        ActionTypeDto(
            id = this.id,
            name = this.name,
            description = this.description
        )

    private fun ActionTypeDto.toEntity(): ActionTypeEntity =
        ActionTypeEntity(
            id = this.id!!,
            name = this.name,
            description = this.description
        )
}
```
- `ActionTypeService`: 
```kotlin
import michigang1.me.rest.dto.ActionTypeDto

interface ActionTypeService {

    fun getAll(): List<ActionTypeDto>?

    fun getById(id: Int): ActionTypeDto

    fun create(dto: ActionTypeDto): Int

    fun update(id: Int, dto: ActionTypeDto)

    fun deleteById(id: Int)
}
```
---
- `package controller` - абстрактний рівень взаємодії користувача з сервісом для обробки _HTTP_-запитів (_GET, POST, PUT, DELETE_):
```kotlin

@RestController
@RequestMapping("/action-types")
class ActionTypeController(
    @Autowired private val service: ActionTypeService

) {
    @GetMapping("/")
    fun getAll(): List<ActionTypeDto>? = service.getAll()

    @GetMapping("/{id}", produces = ["application/json"])
    fun getById(@PathVariable("id") id: Int): ActionTypeDto = service.getById(id)

    @PostMapping(
        value = ["/post"],
        consumes = ["application/json"],
        produces = ["application/json"]
    )
    fun create(@RequestBody dto: ActionTypeDto) = service.create(dto)

    @PutMapping("/{id}", consumes = ["application/json"], produces = ["application/json"])
    fun update(@PathVariable("id") id: Int, @RequestBody dto: ActionTypeDto) = service.update(id, dto)

    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") id: Int) = service.deleteById(id)
}
```
---
- `package exceptions` - пакет для управління помилками:


- `ApiError` - дата-клас з описом помилки
```kotlin
data class ApiError(
    val error: String,
    val description: String
)
```
- `ApiException` - абстрактний клас вилучення 
```kotlin
abstract class ApiException(
    val httpStatus: HttpStatus,
    val apiError: ApiError
) : RuntimeException(apiError.description)
```
-`ErrorHandler` - класс для надіслання вилучень (`ActionTypeNotFoundApiException`, `ActionTypeEmptyTableApiException`) у відповідь на невдалі запити :
```kotlin
@ControllerAdvice
class ErrorHandler : ResponseEntityExceptionHandler() {
    @ExceptionHandler(ApiException::class)
    fun handleApiException(exception: ApiException): ResponseEntity<ApiError> {
        return ResponseEntity(exception.apiError, exception.httpStatus)
    }
}

```
- `ActionTypeNotFoundApiException` - помилка, яка надішлеться у разі невдалого пошуку сутності за ідентифікатором: 
```kotlin
class ActionTypeNotFoundApiException(actionTypeId: Int) : ApiException(
    HttpStatus.NOT_FOUND,
    ApiError(
        error = "action_type.not.found",
        description = "Action type is not found with id = $actionTypeId "
    )
)
```
- `ActionTypeEmptyTableApiException` - помилка, яка надішлеться, якщо таблиця `action_type` не має даних:
```kotlin
class ActionTypeEmptyTableApiException() : ApiException(
    HttpStatus.NO_CONTENT,
    ApiError(
        error = "action_type.no.content",
        description = "Table has no content"
    )
)
```
---
- `RestApplication.kt` - файл запуску програми:
```kotlin
@SpringBootApplication
class RestApplication

fun main(args: Array<String>) {
    runApplication<RestApplication>(*args)
}
```