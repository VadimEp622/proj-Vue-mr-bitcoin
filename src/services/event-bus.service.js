'use strict'

function createEventEmitter() {
    const listenersMap = {}

    return {
        on(evName, listener) {
            listenersMap[evName] = listenersMap[evName] ? [...listenersMap[evName], listener] : [listener]
            return () => listenersMap[evName] = listenersMap[evName].filter(func => func !== listener)
        },
        emit(evName, payload) {
            if (listenersMap[evName]) listenersMap[evName].forEach(listener => listener(payload))
        }
    }
}

export const eventBus = createEventEmitter()

// Vue style guide recommends, always use kebab-case for event names ('myEvent')

export function showSuccessMsg(txt) {
    eventBus.emit('userMsg', { txt, type: 'success' })
}

export function showErrorMsg(txt) {
    eventBus.emit('userMsg', { txt, type: 'fail' })
}

export function closeMainMenu() {
    eventBus.emit('closeMainMenu')
}