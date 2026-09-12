export function validate(events) {

    return events.filter(event =>
        event.sport &&
        event.title &&
        event.datetime
    );
}