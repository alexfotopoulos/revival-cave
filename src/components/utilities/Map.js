export default function Map() {
    return (
        <iframe
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&q=306SouthBoulevardTampa,FL33606&zoom=13`}
        >
        </iframe>
    )
}