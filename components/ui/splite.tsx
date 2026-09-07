'use client'

import { useEffect, useRef } from 'react'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Dynamic THREE import
    const loadThree = async () => {
      try {
        const THREE = (await import('three')).default

        const width = container.clientWidth
        const height = container.clientHeight

        // Scene setup
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x0a0a0a)

        const camera = new THREE.PerspectiveCamera(
          75,
          width / height,
          0.1,
          1000
        )
        camera.position.z = 3

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(width, height)
        renderer.setPixelRatio(window.devicePixelRatio)
        container.appendChild(renderer.domElement)

        // Create 3D shapes
        const geometry = new THREE.IcosahedronGeometry(1.5, 4)
        const material = new THREE.MeshPhongMaterial({
          color: 0x3b82f6,
          emissive: 0x1e40af,
          shininess: 100,
        })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Add secondary mesh
        const secondGeometry = new THREE.OctahedronGeometry(1, 2)
        const secondMaterial = new THREE.MeshPhongMaterial({
          color: 0x06b6d4,
          emissive: 0x0369a1,
          shininess: 50,
        })
        const secondMesh = new THREE.Mesh(secondGeometry, secondMaterial)
        secondMesh.position.set(-1.5, 1, -0.5)
        scene.add(secondMesh)

        // Lighting
        const light1 = new THREE.DirectionalLight(0xffffff, 1)
        light1.position.set(5, 10, 5)
        scene.add(light1)

        const light2 = new THREE.PointLight(0x3b82f6, 0.5)
        light2.position.set(-5, -5, 5)
        scene.add(light2)

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
        scene.add(ambientLight)

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
          if (!container) return
          const rect = container.getBoundingClientRect()
          mouseX.current = (e.clientX - rect.left) / rect.width - 0.5
          mouseY.current = (e.clientY - rect.top) / rect.height - 0.5
        }

        container.addEventListener('mousemove', handleMouseMove)

        // Animation loop
        let animationId: number
        const animate = () => {
          animationId = requestAnimationFrame(animate)

          mesh.rotation.x += 0.005
          mesh.rotation.y += 0.003

          // Mouse tracking
          mesh.rotation.x += mouseY.current * 0.05
          mesh.rotation.y += mouseX.current * 0.05

          secondMesh.rotation.x -= 0.003
          secondMesh.rotation.z -= 0.005
          secondMesh.position.x = Math.sin(Date.now() * 0.001) * 0.5 - 1.5

          renderer.render(scene, camera)
        }
        animate()

        // Handle resize
        const handleResize = () => {
          const newWidth = container.clientWidth
          const newHeight = container.clientHeight
          camera.aspect = newWidth / newHeight
          camera.updateProjectionMatrix()
          renderer.setSize(newWidth, newHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
          window.removeEventListener('resize', handleResize)
          container.removeEventListener('mousemove', handleMouseMove)
          cancelAnimationFrame(animationId)
          container.removeChild(renderer.domElement)
          renderer.dispose()
        }
      } catch (error) {
        console.error('Failed to load THREE:', error)
      }
    }

    loadThree()
  }, [])

  return (
    <div ref={containerRef} className={`w-full h-full ${className || ''}`} />
  )
}
