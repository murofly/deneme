// ===== 3D ROBOT SETUP =====
let scene, camera, renderer;
let robot, robotHead;
let mouseX = 0;
let mouseY = 0;

function initRobot() {
    const container = document.querySelector('.robot-container');

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1410);

    const width = container.clientWidth;
    const height = container.clientHeight;
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Create Robot
    robot = new THREE.Group();

    // Body
    const bodyGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.6);
    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0x8B6F47,
        metalness: 0.6,
        roughness: 0.4
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = -0.2;
    robot.add(body);

    // Chest
    const chestGeometry = new THREE.BoxGeometry(0.5, 0.7, 0.2);
    const chestMaterial = new THREE.MeshStandardMaterial({
        color: 0x6B5437,
        metalness: 0.5,
        roughness: 0.5
    });
    const chest = new THREE.Mesh(chestGeometry, chestMaterial);
    chest.position.z = 0.35;
    chest.position.y = -0.1;
    robot.add(chest);

    // Head
    const headGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const headMaterial = new THREE.MeshStandardMaterial({
        color: 0x8B6F47,
        metalness: 0.6,
        roughness: 0.4
    });
    robotHead = new THREE.Mesh(headGeometry, headMaterial);
    robotHead.position.y = 0.8;
    robot.add(robotHead);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({
        color: 0xFFD89B,
        emissive: 0xD4A574,
        emissiveIntensity: 0.5
    });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.15, 0.85, 0.3);
    robot.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, 0.85, 0.3);
    robot.add(rightEye);

    // Left Arm
    const armGeometry = new THREE.BoxGeometry(0.25, 0.8, 0.25);
    const armMaterial = new THREE.MeshStandardMaterial({
        color: 0x8B6F47,
        metalness: 0.6,
        roughness: 0.4
    });
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.5, 0.2, 0);
    leftArm.rotation.z = 0.3;
    robot.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.5, 0.2, 0);
    rightArm.rotation.z = -0.3;
    robot.add(rightArm);

    // Legs
    const legGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.3);
    const legMaterial = new THREE.MeshStandardMaterial({
        color: 0x6B5437,
        metalness: 0.5,
        roughness: 0.5
    });
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.3, -0.8, 0);
    robot.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.3, -0.8, 0);
    robot.add(rightLeg);

    scene.add(robot);

    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);

    animate();
}

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
    const container = document.querySelector('.robot-container');
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function animate() {
    requestAnimationFrame(animate);

    if (robotHead) {
        const targetRotationY = mouseX * 0.5;
        const targetRotationX = mouseY * 0.3;
        robotHead.rotation.y += (targetRotationY - robotHead.rotation.y) * 0.1;
        robotHead.rotation.x += (targetRotationX - robotHead.rotation.x) * 0.1;
    }

    if (robot) {
        robot.rotation.y += 0.001;
    }

    renderer.render(scene, camera);
}

// ===== SCROLL ANIMATION =====
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    const navbar = document.getElementById('navbar');
    const scrollProgress = window.scrollY / (window.innerHeight * 0.5);

    // Hero fade out
    if (scrollProgress < 1) {
        hero.style.opacity = 1 - Math.min(scrollProgress, 1);
        hero.style.visibility = 'visible';
    } else {
        hero.classList.add('hidden');
    }

    // Navbar appear
    if (window.scrollY > window.innerHeight * 0.4) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});

// ===== SMOOTH SCROLL FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== CTA BUTTON =====
document.querySelector('.cta-btn').addEventListener('click', () => {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

// ===== CARD ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.menu-item, .category-card, .about-item, .contact-info').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== INITIALIZE =====
window.addEventListener('load', () => {
    if (document.querySelector('.robot-container')) {
        initRobot();
    }
});

// Contact form
document.addEventListener('DOMContentLoaded', () => {
    // Add contact form functionality if needed
});
