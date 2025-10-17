import React from 'react'

export default function ProductInfoTap({productDetails}) {
    return (
        <>
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Product Description</h2>
                <p>{productDetails.description}</p>
            </div>
            <div className="grid grid-cols-2">
                <div className="space-y-2">
                    <h2 className="text-xl font-bold">Benefits</h2>
                    <ul className="space-y-1">
                        <li>Rich in vitamins C and K</li>
                        <li>Good source of fiber and antioxidants</li>
                        <li>Supports heart health</li>
                        <li>Helps regulate blood sugar</li>
                        <li>Promotes healthy skin</li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h2 className="text-xl font-bold">Product Details</h2>
                    <div className="flex items-center gap-12">
                        <div className="flex flex-col space-y-1">
                            <span>Origin:</span>
                            <span>Cultivation:</span>
                            <span>Storage:</span>
                            <span>Shelf Life:</span>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span>California, USA</span>
                            <span>Organic</span>
                            <span>Refrigerate upon arrival</span>
                            <span>5-7 days when refrigerated</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <h2 className="text-xl font-bold">How to Store</h2>
                <p>For optimal freshness, refrigerate strawberries unwashed in their original container or in a paper towel-lined container. Wash just before eating. To extend
                    shelf life, remove any damaged berries as soon as possible.</p>
            </div>
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Certifications</h2>
                <div className="flex gap-3">
                    <span className=" py-2 px-5 border border-gray-300 ">USDA Organic</span>
                    <span className=" py-2 px-5 border border-gray-300 ">Non-GMO</span>
                </div>
            </div>
        </>
    )
}
