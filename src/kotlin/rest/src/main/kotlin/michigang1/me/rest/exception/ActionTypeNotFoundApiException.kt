package michigang1.me.rest.exception

import org.springframework.http.HttpStatus

class ActionTypeNotFoundApiException(actionTypeId: Int): ApiException(
    HttpStatus.NOT_FOUND,
    ApiError(
        error = "action_type.not.found",
        description = "Action type is not found with id = $actionTypeId "
    )
)

