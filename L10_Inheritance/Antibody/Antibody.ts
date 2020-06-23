namespace L10_Virus {
    export class Antibody extends Cell{
        position: Vector;
        velocity: Vector;

        rotation: number;

        constructor(_position: Vector) {
            super(_position);
            this.velocity.random(7, 10);
            this.rotation = Math.random() * 360
        }

        draw(_position: Vector): void {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.rotate(this.rotation);
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 24);
            crc2.strokeStyle = "#114d89"
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(0, 36, 12, 0, 1 * Math.PI, true);
            crc2.stroke();
            crc2.restore();
        }

        move(_timeslice: number): void {
            super.move(_timeslice); 

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
    }
}