import { useState } from 'react'

const Admin = () => {
  const [imageUrl, setImageUrl] = useState(null)
  const [uploading, setUploading] = useState(false)

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setUploading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('http://localhost/api/upload', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      setImageUrl(data.url)
    } catch (err) {
      console.error('Upload failed', err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div style={{ fontFamily: 'Jost, sans-serif' }} className="min-h-screen p-10">
      <h1 style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-3xl font-light mb-8">
        Admin
      </h1>

      <div className="mb-6">
        <label className="text-xs tracking-widest text-gray-500 block mb-2">UPLOAD IMAGE</label>
        <input type="file" accept="image/*" onChange={handleUpload} />
      </div>

      {uploading && <p className="text-sm text-gray-500">Uploading...</p>}

      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="uploaded" style={{ maxWidth: '320px' }} />
          <p className="text-xs text-gray-500 mt-2 break-all">{imageUrl}</p>
        </div>
      )}
    </div>
  )
}

export default Admin