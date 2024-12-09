import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { deleteTutorial } from "../utils/tutorialsDelete";

const EditTutorials = () => {
    const [formData, setFormData] = useState();
    const [loading, setLoading] = useState(true); // State untuk loading
    const { id } = useParams();
    const format = (datas) => {
        let number = 1;
        const rows = datas.split("-").map((row) => row.trim());
        return rows.map((row) => `${number++}. ${row}`).join("\n");
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:2121/admin/spesificTutorial?adminKey=CAPSTONE-TRASHUP-ADMIN-API-KEY-12345678&id=" + id,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "api-key": "CAPSTONE-TRASHUP-API-KEY-12345678",
                        },
                        mode: "cors",
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    // Mengisi formData dengan data yang diterima
                    setFormData({
                        title: data.payload.datas[0].title || "",
                        description: data.payload.datas[0].desc || "",
                        tools: format(data.payload.datas[0].tools) || "",
                        steps: format(data.payload.datas[0].steps) || "",
                        wasteGroup: data.payload.datas[0].wasteGroup || "",
                        wasteType: data.payload.datas[0].wasteType || "",
                        image: data.payload.datas[0].pitcURL || "", // jika Anda ingin menampilkan gambar, tambahkan logika khusus
                    });
                } else {
                    console.error("Error fetching data");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); // Set loading menjadi false setelah data selesai dimuat
            }
        };

        fetchData();
    }, []); // Hanya menjalankan fetch sekali saat komponen pertama kali dimuat

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        deleteTutorial(id);
    };


    if (loading) {
        return <div>Loading...</div>; // Menampilkan loading saat data sedang dimuat
    }
    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "20px" }}>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full border rounded px-3 py-2"
                        style={{ height: "120px" }}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label>Tools</label>
                    <textarea
                        name="tools"
                        value={formData.tools}
                        onChange={handleInputChange}
                        className="w-full border rounded px-3 py-2"
                        style={{height: "200px  "}}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label>Steps</label>
                    <textarea
                        name="steps"
                        value={formData.steps}
                        onChange={handleInputChange}
                        className="w-full border rounded px-3 py-2"
                        style={{ height: "200px" }}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label>Waste Group</label>
                    {/* {console.log(formData.wasteGroup)} */}
                    <select
                        name="wasteGroup"
                        value={formData.wasteGroup}
                        onChange={handleInputChange}
                        className="w-full border rounded px-3 py-2"
                    >
                        <option value="">Select Waste Group</option>
                        <option value="organic">Botol</option>
                        <option value="inorganic">Kemasan</option>
                        <option value="hazardous">Kardus</option>
                    </select>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label>Waste Type</label>
                    <select
                        name="wasteType"
                        value={formData.wasteType}
                        onChange={handleInputChange}
                        className="w-full border rounded px-3 py-2"
                    >
                        <option value="">Select Waste Type</option>
                        <option value="plastic">Plastik</option>
                        <option value="metal">Besi/aluminium</option>
                        <option value="glass">Kaca</option>
                        <option value="paper">Kardus</option>
                        <option value="paper">Kertas</option>
                    </select>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label>Image</label>
                    <img src={formData.image} alt="Preview" className="w-1/2 h-1/3 rounded-xl m-auto" />
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div>
                    <button type="submit" className="w-full border rounded px-3 py-2 bg-blue-500 text-white">
                        Submit
                    </button>
                    <button 
                    type="submit" 
                    className="w-full border rounded px-3 py-2 bg-red-500 text-white"
                    onClick={() => {alert(`Delete Data ${id}`)}}
                    >
                        Delete
                    </button>
                    <Link to="/tutorials">
                        <button
                            type="button"
                            className="w-full border rounded px-3 py-2 bg-green-500 text-white">
                            Cancel
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default EditTutorials;
