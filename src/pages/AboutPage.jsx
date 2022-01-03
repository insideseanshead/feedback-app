import React from 'react'
import Card from '../components/shared/Card'

export default function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam accusamus voluptas dolores distinctio, sint quis, ut nemo expedita molestiae beatae et officia impedit consectetur sequi animi porro in reprehenderit veritatis!</p>
                <p>Version: 1.0.0</p>

                <p>
                    <a href="/">Back to Home</a>
                </p>
            </div>
        </Card>
    )
}
