import React from 'react'
import "./style.css"

export default function SwitchInput() {
  return (
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
  <label class="form-check-label" for="flexSwitchCheckChecked">ON</label>
</div>
  )
}
