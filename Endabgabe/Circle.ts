namespace EIA2_Endabgabe {
    export class Circle extends Form {

        constructor(_info?: string[]) {
            if (_info)
                super(_info);
            else
                super();
            this.type = "Circle";
        }

        public draw(): void {
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, this.size.x, 0, 2 * Math.PI);
            if (this.neon == true) {
                crc2.globalCompositeOperation = "lighter";
                crc2.shadowColor = this.color;
                crc2.lineWidth = 8;
                crc2.shadowOffsetX = 2;
                crc2.shadowOffsetY = 2;
                crc2.shadowBlur = 15;
                crc2.strokeStyle = "#ffffff88"
            }
            else if (this.threeD == true) {
                crc2.fillStyle = "414141";
                crc2.shadowBlur = 10;
                crc2.shadowColor = "cyan"
                crc2.shadowOffsetX = -5;
                crc2.shadowOffsetY = 0;
                crc2.lineWidth = 2;
                crc2.strokeStyle = "#ff3a1f80";
                crc2.fill();
            }
            else {
                crc2.strokeStyle = this.color;
                crc2.fillStyle = this.color;
                crc2.lineWidth = 4;
                crc2.fill();
            }
            if (this.active == true) {
                crc2.strokeStyle = "red";
                crc2.lineWidth = 4;
                crc2.stroke();
            }
            else {
                crc2.strokeStyle = this.color;
                crc2.stroke();
            }
            crc2.fillStyle = this.color;
            crc2.restore();
            crc2.closePath();
        }

        public changeColor(_newColor: string): void {
            super.changeColor(_newColor);
        }

        public changePosition(_x: number, _y: number) {
            super.changePosition(_x, _y);
        }

        public changeRotation(_factor: number) {
            super.changeRotation(_factor);
        }

        public resize(_factor: number) {
            super.resize(_factor);
        }

        public move(): void {
            super.move(0);
            if (this.position.x < this.size.x)
                this.position.x += crc2.canvas.width;
            if (this.position.y < this.size.y)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width - this.size.x)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height - this.size.y)
                this.position.y -= crc2.canvas.height;
        }
    }
}