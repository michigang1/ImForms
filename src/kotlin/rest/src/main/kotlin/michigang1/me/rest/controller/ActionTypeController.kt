package michigang1.me.rest.controller

import michigang1.me.rest.dto.ActionTypeDto
import michigang1.me.rest.service.ActionTypeService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/action-types")
class ActionTypeController(
    @Autowired private val service: ActionTypeService

) {
    @GetMapping("")
    fun getAll(): List<ActionTypeDto> = service.getAll()

    @GetMapping("/{id}", produces = ["application/json"])
    fun getById(@PathVariable("id") id: Int): ActionTypeDto = service.getById(id)

    @PostMapping(
        value = ["/"],
        consumes = ["application/xml", "application/json"],
        produces = ["application/json;"]
    )
    fun create(@RequestBody dto: ActionTypeDto) = service.create(dto)

    @PutMapping("/{id}", consumes = ["application/json"], produces = ["application/json"])
    fun update(@PathVariable("id") id: Int, @RequestBody dto: ActionTypeDto) = service.update(id, dto)

    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") id: Int) = service.deleteById(id)
}
