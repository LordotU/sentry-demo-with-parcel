import asyncError from "./errors/asyncError.js"
import catchedError from "./errors/catchedError.js"
import actionButtonClickHandler from "./errors/actionButtonClickHandlerError.js"

asyncError()
catchedError()

window.actionButtonClickHandler = actionButtonClickHandler
