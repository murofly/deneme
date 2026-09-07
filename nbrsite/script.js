// Three.js Robot Setup
let scene, camera, renderer;
let robot, robotHead;
let mouseX = 0;
let mouseY = 0;

function initRobot() {
    const container = document.getElementById('robot-container');

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);

    // Camera setup
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Create Robot
    robot = new THREE.Group();

    // Body
    const bodyGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.6);
    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0x2d2d2d,
        metalness: 0.7,
        roughness: 0.3
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = -0.2;
    body.castShadow = true;
    robot.add(body);

    // Chest Panel
    const chestGeometry = new THREE.BoxGeometry(0.5, 0.7, 0.2);
    const chestMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        metalness: 0.5,
        roughness: 0.4
    });
    const chest = new THREE.Mesh(chestGeometry, chestMaterial);
    chest.position.z = 0.35;
    chest.position.y = -0.1;
    chest.castShadow = true;
    robot.add(chest);

    // Head
    const headGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const headMaterial = new THREE.MeshStandardMaterial({
        color: 0x333333,
        metalness: 0.6,
        roughness: 0.3
    });
    robotHead = new THREE.Mesh(headGeometry, headMaterial);
    robotHead.position.y = 0.8;
    robotHead.castShadow = true;
    robot.add(robotHead);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({
        color: 0x4a90e2,
        emissive: 0x4a90e2,
        emissiveIntensity: 0.8
    });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.15, 0.85, 0.3);
    leftEye.castShadow = true;
    robot.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, 0.85, 0.3);
    rightEye.castShadow = true;
    robot.add(rightEye);

    // Left Arm
    const armGeometry = new THREE.BoxGeometry(0.25, 0.8, 0.25);
    const armMaterial = new THREE.MeshStandardMaterial({
        color: 0x2d2d2d,
        metalness: 0.6,
        roughness: 0.3
    });
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.5, 0.2, 0);
    leftArm.castShadow = true;
    leftArm.rotation.z = 0.3;
    robot.add(leftArm);

    // Right Arm
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.5, 0.2, 0);
    rightArm.castShadow = true;
    rightArm.rotation.z = -0.3;
    robot.add(rightArm);

    // Left Leg
    const legGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.3);
    const legMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        metalness: 0.5,
        roughness: 0.4
    });
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.3, -0.8, 0);
    leftLeg.castShadow = true;
    robot.add(leftLeg);

    // Right Leg
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.3, -0.8, 0);
    rightLeg.castShadow = true;
    robot.add(rightLeg);

    scene.add(robot);

    // Mouse tracking
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);

    // Animation loop
    animate();
}

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
    const container = document.getElementById('robot-container');
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function animate() {
    requestAnimationFrame(animate);

    // Robot looks at mouse
    if (robotHead) {
        const targetRotationY = mouseX * 0.5;
        const targetRotationX = mouseY * 0.3;

        robotHead.rotation.y += (targetRotationY - robotHead.rotation.y) * 0.1;
        robotHead.rotation.x += (targetRotationX - robotHead.rotation.x) * 0.1;
    }

    // Gentle rotation of entire robot
    if (robot) {
        robot.rotation.y += 0.002;
    }

    renderer.render(scene, camera);
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// CTA Button functionality
document.querySelector('.cta-button').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Initialize when page loads
window.addEventListener('load', () => {
    if (document.getElementById('robot-container')) {
        initRobot();
    }
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Teşekkür ederiz! Mesajınız başarıyla gönderilmiştir.\nEn kısa zamanda sizinle iletişime geçeceğiz.');
    e.target.reset();
});

// Add scroll animation for cards
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

document.querySelectorAll('.service-card, .stat, .info-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
