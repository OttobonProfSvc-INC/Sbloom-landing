import React from 'react';
import { PenTool, Film, FileText, MonitorSmartphone } from 'lucide-react';
import './CreativeOrbit.css';

export const CreativeOrbit: React.FC = () => {
  return (
    <div className="co-wrapper">
      <div className="co-radial-glow"></div>
      
      {/* Outer Ring (CW 35-45s) */}
      <div className="co-outer-ring">
        {/* Top: Design */}
        <div className="co-node co-node-top">
          <div className="co-node-content co-counter-cw-slow">
            <div className="co-icon-box"><PenTool size={20} /></div>
            <span className="co-label">DESIGN</span>
          </div>
        </div>
        {/* Bottom: Video */}
        <div className="co-node co-node-bottom">
          <div className="co-node-content co-counter-cw-slow">
            <div className="co-icon-box"><Film size={20} /></div>
            <span className="co-label">VIDEO</span>
          </div>
        </div>
      </div>

      {/* Inner Ring (CCW 25-30s) */}
      <div className="co-inner-ring">
        {/* Left: Content */}
        <div className="co-node co-node-left">
          <div className="co-node-content co-counter-ccw-fast">
            <div className="co-icon-box"><FileText size={20} /></div>
            <span className="co-label">CONTENT</span>
          </div>
        </div>
        {/* Right: Digital */}
        <div className="co-node co-node-right">
          <div className="co-node-content co-counter-ccw-fast">
            <div className="co-icon-box"><MonitorSmartphone size={20} /></div>
            <span className="co-label">DIGITAL</span>
          </div>
        </div>
      </div>

      {/* Central Element */}
      <div className="co-center-element">
        <span className="co-center-text">sBLOOM</span>
      </div>
    </div>
  );
};
