import React, { useEffect, useRef } from 'react';
import Button from './Button';
import styled, { withTheme } from 'styled-components';

const StyledHero = styled.div`
  position: relative;
  color: white;
  font-size: 3em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 780px) {
    font-size: 2em;
  }
`;

const Title = styled.div`
  position: absolute;
  text-align: center;
  line-height: 1.1em;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.secondary1};
`;

const Canvas = styled.canvas`
  background-color: ${({ theme }) => theme.canvasBackground};
  width: 100%;
  height: 100%;
  transition: all 0.35s linear;
`;

const Hero = props => {
  let name = props.theme.name;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    var ctx = canvas.getContext('2d');
    var light = {
      x: canvas.width / 2,
      y: canvas.height / 2
    };
    var sun = false;
    let key = -1;
    let xmouse, ymouse, dx, dy, xdiff, ydiff;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      light = {
        x: canvas.width / 2,
        y: canvas.height / 2
      };
    }
    const canvasColor = props.theme.canvasBackground;
    const canvasLight = props.theme.canvasLight;
    const colors = [
      props.theme.primary1,
      props.theme.primary2,
      props.theme.secondary1
    ];
    // const colors = ['#7395ae', '#557a95', '#9b6e00'];

    function drawLight() {
      ctx.beginPath();
      ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
      var gradient = ctx.createRadialGradient(
        light.x,
        light.y,
        0,
        light.x,
        light.y,
        1000
      );
      gradient.addColorStop(0, canvasLight);
      gradient.addColorStop(1, canvasColor);
      ctx.fillStyle = gradient;
      ctx.fill();

      if (sun) {
        ctx.beginPath();
        ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
        gradient = ctx.createRadialGradient(
          light.x,
          light.y,
          0,
          light.x,
          light.y,
          5
        );
        gradient.addColorStop(0, '#fff');
        gradient.addColorStop(0.3, '#fff');
        gradient.addColorStop(1, canvasLight);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    function Box() {
      this.half_size = Math.floor(Math.random() * 15 + 1);
      this.x = Math.floor(Math.random() * canvas.width + 1);
      this.y = Math.floor(Math.random() * canvas.height + 1);
      this.r = Math.random() * Math.PI;
      this.shadow_length = 2000;
      this.color = colors[Math.floor(Math.random() * colors.length)];

      this.getDots = function() {
        var full = (Math.PI * 2) / 4;

        var p1 = {
          x: this.x + this.half_size * Math.sin(this.r),
          y: this.y + this.half_size * Math.cos(this.r)
        };
        var p2 = {
          x: this.x + this.half_size * Math.sin(this.r + full),
          y: this.y + this.half_size * Math.cos(this.r + full)
        };
        var p3 = {
          x: this.x + this.half_size * Math.sin(this.r + full * 2),
          y: this.y + this.half_size * Math.cos(this.r + full * 2)
        };
        var p4 = {
          x: this.x + this.half_size * Math.sin(this.r + full * 3),
          y: this.y + this.half_size * Math.cos(this.r + full * 3)
        };

        return {
          p1: p1,
          p2: p2,
          p3: p3,
          p4: p4
        };
      };
      this.rotate = function() {
        var speed = (30 - this.half_size) / 60;
        this.r += speed * 0.002;
        this.x += speed;
        this.y += speed;
      };
      this.draw = function() {
        var dots = this.getDots();
        ctx.beginPath();
        ctx.moveTo(dots.p1.x, dots.p1.y);
        ctx.lineTo(dots.p2.x, dots.p2.y);
        ctx.lineTo(dots.p3.x, dots.p3.y);
        ctx.lineTo(dots.p4.x, dots.p4.y);
        ctx.fillStyle = this.color;
        ctx.fill();

        if (this.y - this.half_size > canvas.height) {
          this.y -= canvas.height + 100;
        }
        if (this.x - this.half_size > canvas.width) {
          this.x -= canvas.width + 100;
        }
      };
      this.drawShadow = function() {
        var dots = this.getDots();
        var angles = [];
        var points = [];
        let dot;

        for (dot in dots) {
          var angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
          var endX =
            dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
          var endY =
            dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
          angles.push(angle);
          points.push({
            endX: endX,
            endY: endY,
            startX: dots[dot].x,
            startY: dots[dot].y
          });
        }

        for (var i = points.length - 1; i >= 0; i--) {
          var n = i === 3 ? 0 : i + 1;
          ctx.beginPath();
          ctx.moveTo(points[i].startX, points[i].startY);
          ctx.lineTo(points[n].startX, points[n].startY);
          ctx.lineTo(points[n].endX, points[n].endY);
          ctx.lineTo(points[i].endX, points[i].endY);
          ctx.fillStyle = canvasColor;
          ctx.fill();
        }
      };
    }

    var boxes = [];

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawLight();

      for (let i = 0; i < boxes.length; i++) {
        boxes[i].rotate();
        boxes[i].drawShadow();
      }
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].draw();
      }
      requestAnimationFrame(draw);
    }

    resize();
    draw();

    while (boxes.length < 40) {
      boxes.push(new Box());
    }

    window.onresize = resize;
    canvas.onmousemove = function(e) {
      xmouse = e.offsetX === undefined ? e.layerX : e.offsetX;
      ymouse = e.offsetY === undefined ? e.layerY : e.offsetY;
      if (!sun) {
        key = requestAnimationFrame(followMouse);
      }
      sun = true;
    };

    function followMouse() {
      key = requestAnimationFrame(followMouse);
      xdiff = xmouse - light.x;
      ydiff = ymouse - light.y;
      if (!light.x || !light.y) {
        light.x = xmouse;
        light.y = ymouse;
      } else {
        dx = xdiff * 0.015;
        dy = ydiff * 0.015;
        if (Math.abs(dx) + Math.abs(dy) < 0.1) {
          light.x = xmouse;
          light.y = ymouse;
          window.cancelAnimationFrame(key);
          sun = false;
        } else {
          light.x += dx;
          light.y += dy;
        }
      }
    }
  }, [name]);

  return (
    <StyledHero>
      <Title>
        <div>
          Hello, I'm <Span>Ian Roskow</Span>.
        </div>
        <div>I'm a front-end web developer.</div>
        <Button
          Text='View my work'
          Icon='angle down'
          onClick={() =>
            window.scroll({
              top: window.innerHeight + 20,
              left: 0,
              behavior: 'smooth'
            })
          }
        />
      </Title>
      <Canvas ref={canvasRef}></Canvas>
    </StyledHero>
  );
};

export default withTheme(Hero);
