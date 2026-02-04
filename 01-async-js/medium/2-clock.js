// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


const updateClock = () => {
    const date = new Date();
    const H = date.getHours();
    const M = date.getMinutes();
    const S = date.getSeconds();

    // Optionally add leading zeros
    const hh = String(H).padStart(2, '0');
    const mm = String(M).padStart(2, '0');
    const ss = String(S).padStart(2, '0');

    const ampm = H >= 12 ? 'PM' : 'AM';
    console.clear();
    console.log(`${hh}:${mm}:${ss} ${ampm}`);
};

setInterval(updateClock, 1000);