"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 1)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 8

    // Create starfield
    const starsGeometry = new THREE.BufferGeometry()
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    })
    const starsPositions = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000 * 3; i += 3) {
      starsPositions[i] = (Math.random() - 0.5) * 400
      starsPositions[i + 1] = (Math.random() - 0.5) * 400
      starsPositions[i + 2] = (Math.random() - 0.5) * 400
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starsPositions, 3))
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Create main globe
    const geometry = new THREE.IcosahedronGeometry(2, 32)
    const material = new THREE.MeshPhongMaterial({
      color: 0x3a86ff,
      wireframe: false,
      emissive: 0x1a5fa0,
    })
    const globe = new THREE.Mesh(geometry, material)
    scene.add(globe)

    // Create wireframe
    const wireframeGeometry = new THREE.IcosahedronGeometry(2.05, 32)
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial)
    scene.add(wireframe)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = true
    controls.autoRotateSpeed = 2

    // Animation loop
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      globe.rotation.x += 0.0003
      globe.rotation.y += 0.0005
      wireframe.rotation.x += 0.0003
      wireframe.rotation.y += 0.0005
      stars.rotation.y += 0.0001

      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      wireframeGeometry.dispose()
      wireframeMaterial.dispose()
      starsGeometry.dispose()
      starsMaterial.dispose()
      renderer.dispose()
      controls.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    />
  )
}
