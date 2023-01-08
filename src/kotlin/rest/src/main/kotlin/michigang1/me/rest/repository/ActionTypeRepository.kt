package michigang1.me.rest.repository
import michigang1.me.rest.entity.ActionTypeEntity
import org.springframework.data.repository.CrudRepository
interface ActionTypeRepository : CrudRepository<ActionTypeEntity, Int>
