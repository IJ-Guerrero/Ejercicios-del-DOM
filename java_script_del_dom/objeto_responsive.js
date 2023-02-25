const d= document,
w = window;

export default function responsiveMedia(id, mq, mobileVersion, desktopContent) {
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent
        } else {
            d.getElementById(id).innerHTML = mobileVersion
        }

        console.log(breakpoint)
    }

    breakpoint.addEventListener( "change", responsive)
    responsive(breakpoint);

}

