export const chart_watermark = {
    id: 'chart_watermark',
    afterDraw: (chart: any) => {
        const image = new Image();
        image.src = 'https://sun9-7.userapi.com/impg/ui8WILjD7Wkl-y2aAaIIiIDvI25EReVNbk3YUA/eA3nk8T1YcI.jpg?size=758x1385&quality=95&sign=f5954e3e85942c2d6c0e971b6f198d19&type=album';
        if (image.complete) {
            const image_height = image.naturalHeight; // Or you can use image.naturalHeight;
            const image_width = image.naturalWidth; // Or you can use image.naturalWidth;
            const ctx = chart.ctx;
            const x = chart.chartArea.width - image_width;
            const y = chart.chartArea.height - image_height;
            ctx.globalAlpha = 0.35;
            ctx.drawImage(image, x, y, image_width, image_height);
            ctx.globalAlpha = 1;
        } else {
            image.onload = () => chart.draw();
        }
    }
};