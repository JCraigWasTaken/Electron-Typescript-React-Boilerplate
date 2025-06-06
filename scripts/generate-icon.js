const pngToIco = require("png-to-ico")
const fs = require("fs")
const path = require("path")
const { createCanvas, loadImage } = require("canvas")

// Windows installer requires these specific sizes
const WINDOWS_SIZES = [16, 32, 48, 256]

// Additional sizes for other platforms
const PLATFORM_SIZES = {
    macos: [16, 32, 64, 128, 256, 512, 1024],
    linux: [16, 24, 32, 48, 64, 96, 128, 256],
}

async function resizeImage(sourceImage, targetSize) {
    const canvas = createCanvas(targetSize, targetSize)
    const ctx = canvas.getContext("2d")

    // Enable better image scaling quality
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"

    if (sourceImage) {
        // Draw image with high quality scaling
        ctx.drawImage(sourceImage, 0, 0, targetSize, targetSize)
    } else {
        // Generate default gradient icon
        const gradient = ctx.createLinearGradient(0, 0, targetSize, targetSize)
        gradient.addColorStop(0, "#4a90e2")
        gradient.addColorStop(1, "#50e3c2")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, targetSize, targetSize)

        // Add some basic shape to make it more visible at small sizes
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
        ctx.beginPath()
        ctx.arc(targetSize / 2, targetSize / 2, targetSize / 3, 0, Math.PI * 2)
        ctx.fill()
    }

    return canvas
}

async function generateIcons(sourcePath) {
    try {
        console.log("Starting icon generation...")

        // Load source image if it exists
        let sourceImage = null
        if (sourcePath && fs.existsSync(sourcePath)) {
            console.log(`Loading source image from: ${sourcePath}`)
            sourceImage = await loadImage(sourcePath)
        }

        // Generate Windows ICO first (with specific required sizes)
        const windowsPngFiles = []
        for (const size of WINDOWS_SIZES) {
            console.log(`Generating Windows icon size: ${size}x${size}`)
            const pngPath = path.join(__dirname, `../public/temp-win-${size}.png`)
            const canvas = await resizeImage(sourceImage, size)
            const buffer = canvas.toBuffer("image/png")
            fs.writeFileSync(pngPath, buffer)
            windowsPngFiles.push(pngPath)
        }

        // Generate Windows ICO
        console.log("Creating Windows ICO file...")
        const icoPath = path.join(__dirname, "../public/icon.ico")
        const icoBuffer = await pngToIco(windowsPngFiles)
        fs.writeFileSync(icoPath, icoBuffer)

        // Generate macOS icons
        console.log("Creating macOS icons...")
        const macosIconsDir = path.join(__dirname, "../public/icons/macos")
        fs.mkdirSync(macosIconsDir, { recursive: true })
        for (const size of PLATFORM_SIZES.macos) {
            console.log(`Generating macOS icon size: ${size}x${size}`)
            const canvas = await resizeImage(sourceImage, size)
            const buffer = canvas.toBuffer("image/png")
            fs.writeFileSync(path.join(macosIconsDir, `icon_${size}x${size}.png`), buffer)
        }

        // Generate Linux icons
        console.log("Creating Linux icons...")
        const linuxIconsDir = path.join(__dirname, "../public/icons/linux")
        fs.mkdirSync(linuxIconsDir, { recursive: true })
        for (const size of PLATFORM_SIZES.linux) {
            console.log(`Generating Linux icon size: ${size}x${size}`)
            const canvas = await resizeImage(sourceImage, size)
            const buffer = canvas.toBuffer("image/png")
            fs.writeFileSync(path.join(linuxIconsDir, `icon_${size}x${size}.png`), buffer)
        }

        // Also keep the main icon.png (using the largest Linux size)
        const largestLinuxSize = Math.max(...PLATFORM_SIZES.linux)
        const mainIconCanvas = await resizeImage(sourceImage, largestLinuxSize)
        const mainIconBuffer = mainIconCanvas.toBuffer("image/png")
        fs.writeFileSync(path.join(__dirname, "../public/icon.png"), mainIconBuffer)

        // Clean up temporary files
        console.log("Cleaning up temporary files...")
        windowsPngFiles.forEach(file => fs.existsSync(file) && fs.unlinkSync(file))

        console.log("Icon generation completed successfully!")
        console.log(`Generated Windows ICO with sizes: ${WINDOWS_SIZES.join(", ")}`)
        console.log(`Generated macOS icons with sizes: ${PLATFORM_SIZES.macos.join(", ")}`)
        console.log(`Generated Linux icons with sizes: ${PLATFORM_SIZES.linux.join(", ")}`)
    } catch (error) {
        console.error("Error generating icons:", error)
        console.error(error.stack)
        process.exit(1)
    }
}

// Execute the script
const customIconPath = path.join(__dirname, "../public/custom-icon.png")
generateIcons(fs.existsSync(customIconPath) ? customIconPath : null)
