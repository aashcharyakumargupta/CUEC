import React, { useEffect, useRef } from 'react';

const Background3D = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Meteor Class
        class Meteor {
            constructor(w, h) {
                this.reset(w, h);
                // Randomize initial position so they don't all start at once
                this.x = Math.random() * w;
                this.y = Math.random() * h;
            }

            reset(w, h) {
                // Determine whether it spawns from top or right side
                const fromTop = Math.random() > 0.5;
                if (fromTop) {
                    this.x = Math.random() * w * 1.5; // Spawn a bit wider to allow for diagonal entry
                    this.y = -50;
                } else {
                    this.x = w + 50;
                    this.y = Math.random() * h;
                }

                this.size = Math.random() * 1.5 + 0.5;
                // Fast diagonal movement (down and to the left)
                this.speed = Math.random() * 8 + 10;
                this.vx = -this.speed;
                this.vy = this.speed;

                // Opacity is bright then fades quickly
                this.opacity = 0;
                this.maxOpacity = Math.random() * 0.5 + 0.5;
                this.active = false; // Is it currently falling?

                // Meteors spawn more frequently
                this.spawnDelay = Math.random() * 200 + 50;
                this.framesWaited = 0;
            }

            update(w, h) {
                if (!this.active) {
                    this.framesWaited++;
                    if (this.framesWaited > this.spawnDelay) {
                        this.active = true;
                        this.opacity = 0;
                    }
                    return;
                }

                // Move
                this.x += this.vx;
                this.y += this.vy;

                // Fade in then out
                if (this.y < h / 2) {
                    this.opacity += 0.05;
                } else {
                    this.opacity -= 0.02;
                }

                // Cap opacity
                if (this.opacity > this.maxOpacity) this.opacity = this.maxOpacity;

                // Draw
                if (this.opacity > 0) {
                    ctx.beginPath();
                    // Create a trail gradient
                    const gradient = ctx.createLinearGradient(this.x, this.y, this.x - this.vx * 4, this.y - this.vy * 4);
                    gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
                    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = this.size;
                    ctx.lineCap = 'round';
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x - this.vx * 4, this.y - this.vy * 4);
                    ctx.stroke();
                }

                // Reset if off screen or faded out
                if (this.x < -100 || this.y > h + 100 || (this.y > h / 2 && this.opacity <= 0)) {
                    this.reset(w, h);
                }
            }
        }

        let meteors = [];
        const initMeteors = () => {
            meteors = [];
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Increase the number of meteors significantly for a real shower effect
            for (let i = 0; i < 20; i++) {
                meteors.push(new Meteor(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            // Fill background with solid black
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            meteors.forEach(meteor => meteor.update(canvas.width, canvas.height));

            animationFrameId = requestAnimationFrame(animate);
        };

        initMeteors();
        const resizeCanvas = () => {
            initMeteors();
        };
        window.addEventListener('resize', resizeCanvas);

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                backgroundColor: '#000000'
            }}
        />
    );
};

export default Background3D;
