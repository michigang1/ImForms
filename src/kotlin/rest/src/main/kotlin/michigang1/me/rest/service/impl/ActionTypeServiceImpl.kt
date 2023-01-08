package michigang1.me.rest.service.impl

import jakarta.transaction.Transactional
import michigang1.me.rest.dto.ActionTypeDto
import michigang1.me.rest.entity.ActionTypeEntity
import michigang1.me.rest.repository.ActionTypeRepository
import michigang1.me.rest.service.ActionTypeService
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class ActionTypeServiceImpl(
    private val repository: ActionTypeRepository
) : ActionTypeService {
    class NotFoundException : RuntimeException() {
        override val message: String
            get() = "Entity is not founded "
    }

    override fun getAll(): List<ActionTypeDto> {
        return repository.findAll().map { it.toDto() }
    }

    override fun getById(id: Int): ActionTypeDto {
        return repository.findByIdOrNull(id)
            ?.toDto()
            ?: throw NotFoundException()
    }

    @Transactional
    override fun create(dto: ActionTypeDto): Int {
        val actionTypeEntity = repository.save(dto.toEntity())
        return actionTypeEntity.id
    }

    @Transactional
    override fun update(id: Int, dto: ActionTypeDto) {
        var existingEntity = repository.findByIdOrNull(id)
            ?: throw NotFoundException()

        existingEntity.name = dto.name
        existingEntity.description = dto.description

        existingEntity = repository.save(existingEntity)
    }

    override fun deleteById(id: Int) {
        val existingEntity = repository.findByIdOrNull(id)
            ?: throw NotFoundException()
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
            id = 0,
            name = this.name,
            description = this.description
        )
}
