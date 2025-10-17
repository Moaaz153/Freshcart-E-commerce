import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOnlineStatus } from "../../hooks/UseOnlineStatues"
import { faArrowsRotate, faWifi } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function OflineScreen({ children }) {
    const [lastChecked, setLastChecked] = useState(new Date());

    useEffect(() => {
        // Update the last checked time every 30 seconds
        const interval = setInterval(() => {
            setLastChecked(new Date());
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };

    const isOnline = useOnlineStatus();

    if (isOnline) {
        return children;
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
                    {/* WiFi Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <FontAwesomeIcon icon={faWifi} className="text-5xl text-red-500" />
                            {/* <WifiOff className="w-16 h-16 text-red-500" strokeWidth={2} /> */}
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">!</span>
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-bold text-gray-800 text-center mb-3">
                        Connection Lost
                    </h1>

                    {/* Description */}
                    <p className="text-gray-500 text-center text-sm mb-8">
                        Oops! It looks like you've lost your internet connection. Don't worry, we'll help you get back online.
                    </p>

                    {/* Status Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <FontAwesomeIcon icon={faWifi} className="text-lg text-gray-400" />
                                {/* <WifiOff className="w-4 h-4 text-gray-400" /> */}
                                <span className="text-xs text-gray-600 font-medium">Network Status</span>
                            </div>
                            <p className="text-red-500 font-semibold text-sm">Offline</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                                <span className="text-xs text-gray-600 font-medium">Last Checked</span>
                            </div>
                            <p className="text-gray-700 font-semibold text-sm">{formatTime(lastChecked)}</p>
                        </div>
                    </div>

                    {/* Try Again Button */}
                    <button onClick={() => setLastChecked(new Date())} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors mb-8">
                        {/* <RefreshCw className="w-5 h-5" /> */}
                        <FontAwesomeIcon icon={faArrowsRotate} className="text-lg" />
                        Try Again
                    </button>

                    {/* Quick Fixes */}
                    <div className="mb-6">
                        <h3 className="text-gray-700 font-semibold text-sm mb-3">Quick Fixes:</h3>
                        <ul className="space-y-2 text-gray-600 text-xs">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Check your WiFi connection</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Try moving closer to your router</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Restart your device</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Contact your internet provider if the issue persists</span>
                            </li>
                        </ul>
                    </div>

                    {/* Auto-checking */}
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
                        {/* <RefreshCw className="w-3 h-3" /> */}
                        <FontAwesomeIcon icon={faArrowsRotate} className="text-sm" />
                        <span>Auto-checking connection every 30 seconds</span>
                    </div>
                </div>
            </div>

        </>
    )
}
