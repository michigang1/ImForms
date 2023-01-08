package michigang1.me.rest.service.impl

import jakarta.transaction.Transactional
import michigang1.me.rest.dto.ActionTypeDto
import michigang1.me.rest.entity.ActionTypeEntity
import michigang1.me.rest.exception.ActionTypeNotFoundApiException
import michigang1.me.rest.repository.ActionTypeRepository
import michigang1.me.rest.service.ActionTypeService
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class ActionTypeServiceImpl(
    private val repository: ActionTypeRepository
) : ActionTypeService {

    override fun getAll(): List<ActionTypeDto> {
        return repository.findAll().map { it.toDto() }
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
