import React from 'react';
import './Loading.scss';
export default function Loading () {
    return (
      <div id="loading-box">
        <div className="loading-detail">
          <svg className="load" viewBox="0 0 32 32">
            <circle className="loading" cx="16" cy="16" r="10" fill="none" />
          </svg>
        </div>
      </div>
    );
}
