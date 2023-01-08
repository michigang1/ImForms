package michigang1.me.rest.service

import michigang1.me.rest.dto.ActionTypeDto

interface ActionTypeService {

    fun getAll(): List<ActionTypeDto>

    fun getById(id: Int): ActionTypeDto

    fun create(dto: ActionTypeDto): Int

    fun update(id: Int, dto: ActionTypeDto)

    fun deleteById(id: Int)
}
