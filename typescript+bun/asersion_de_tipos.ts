const canvas = document.getElementById("span") as HTMLCanvasElement;
//instanceof es para clases
if (canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
}

// typeof es para tipos primitivos
function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

