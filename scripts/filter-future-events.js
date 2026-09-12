export function filterFutureEvents(events) {

    const now = new Date();

    const max = new Date();

    max.setDate(
        max.getDate() + 7
    );

    return events.filter(event => {

        if (!event.datetime) {

            return false;
        }

        const eventDate =
            new Date(event.datetime);

        return (
            eventDate >= now &&
            eventDate <= max
        );
    });
}