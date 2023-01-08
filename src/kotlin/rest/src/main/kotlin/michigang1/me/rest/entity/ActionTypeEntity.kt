package michigang1.me.rest.entity

import jakarta.persistence.*
import org.springframework.boot.context.properties.bind.DefaultValue

@Entity
@Table(name = "action_type")
class ActionTypeEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    var name: String = "",

    var description: String = ""
)
