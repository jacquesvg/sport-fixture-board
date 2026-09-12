export function validateEvents(events) {

    return events.filter(event => {

        return (

            event.id &&
            event.sport &&
            event.title &&
            event.competition &&
            event.location &&
            event.datetime &&
            event.description

        );

    });

}