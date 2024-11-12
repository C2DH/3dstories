const LogoUni = ({ color = 'var(--white)', width = 200, className }) => {
  const ratio = 318 / 98
  const height = width / ratio

  return (
    <a href="https://www.c2dh.uni.lu/" aria-label="Link to University of Luxembourg" rel="no-referrer" target="_blank">
      <div className={`LogoUni SVG ${className} flex`} style={{ height: height + 'px', width: width + 'px' }}>
        <svg
          id="LogoUni"
          data-name="Logo University of Luxembourg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 318 98"
          fill={color}
        >
          <path d="M283.069 30.75h-9.419v9.425h9.419V30.75ZM298.373 45.463h-9.419v9.426h9.419v-9.426ZM289.194 16.997h-9.419v9.426h9.419v-9.426ZM242.87 16.002h-9.419v9.425h9.419v-9.425ZM266.685 12.018h-9.419v9.426h9.419v-9.426ZM283.378 51.85h-9.419v9.426h9.419V51.85ZM220.001 5.923h-9.419v9.426h9.419V5.923ZM136.654 0h-1.459v98h1.459V0ZM176.371 80.883c.292-.103.532-.275.738-.481.206-.206.36-.446.48-.738s.172-.618.172-.979V74.96h-.807v3.708c0 .292-.051.532-.137.738-.086.206-.206.36-.343.498-.137.12-.292.223-.48.275a2.162 2.162 0 0 1-.567.086c-.188 0-.377-.035-.566-.086a1.216 1.216 0 0 1-.48-.275c-.137-.12-.24-.292-.326-.498-.086-.206-.12-.446-.12-.738v-3.709h-.824v3.726c0 .378.052.704.172.996.12.292.274.532.48.738.206.206.446.36.721.464.292.103.6.154.943.154.344 0 .635-.051.91-.171l.034.017ZM183.662 80.951l-2.058-3.193 1.801-2.781h-.926l-1.15 1.75s-.12.19-.189.327c-.085-.137-.137-.24-.188-.309l-1.133-1.768h-.995l1.819 2.832-2.059 3.16h.944l1.321-2.026s.068-.12.12-.19a.652.652 0 0 0 .103-.171c.017-.034.034-.069.051-.069 0 0 .017.035.052.069a.626.626 0 0 0 .103.172c.034.068.068.12.103.171l1.321 2.044h.978l-.018-.018ZM187.815 75.75v-.773h-3.311v5.974h3.466v-.772h-2.643v-1.752h2.437v-.79h-2.437V75.75h2.488ZM193.973 80.951h.806v-5.974h-.72l-2.162 2.918-2.23-2.918h-.687v5.974h.807V76.402c.034.068.068.103.086.137l1.87 2.455h.326l1.853-2.524s.051-.068.085-.137V80.95h-.034ZM199.292 76.539c0-.24-.052-.447-.121-.635a1.255 1.255 0 0 0-.36-.481 1.567 1.567 0 0 0-.549-.31 2.21 2.21 0 0 0-.686-.102h-1.561v5.975h1.767c.326 0 .6-.052.84-.155.241-.103.412-.223.567-.378.154-.154.257-.326.326-.532.068-.189.103-.378.103-.566 0-.19-.035-.361-.086-.516a2.127 2.127 0 0 0-.24-.429 1.84 1.84 0 0 0-.326-.309 1.277 1.277 0 0 0-.344-.171c.189-.12.361-.292.481-.516.137-.223.189-.497.189-.84v-.035Zm-2.471-.773h.618c.343 0 .583.069.755.224.171.154.257.36.257.618 0 .12 0 .24-.052.377a.74.74 0 0 1-.171.326.88.88 0 0 1-.343.24c-.138.07-.326.087-.549.087h-.549v-1.872h.034Zm1.939 3.503a.905.905 0 0 1-.258.67c-.171.171-.446.257-.806.257h-.875v-1.769h.961c.309 0 .549.07.72.24.172.172.275.361.275.619l-.017-.017ZM204.508 80.814a3.06 3.06 0 0 0 .961-.652c.275-.275.481-.601.652-.98.155-.377.24-.772.24-1.218a3.166 3.166 0 0 0-.84-2.198 2.898 2.898 0 0 0-.961-.652 3.254 3.254 0 0 0-1.252-.24c-.429 0-.824.085-1.184.24a2.807 2.807 0 0 0-.944.652c-.274.275-.48.601-.635.979a3.153 3.153 0 0 0-.223 1.219c0 .446.086.876.24 1.253.155.378.378.704.652.979.275.275.601.48.978.652.378.155.772.24 1.184.24.412 0 .807-.085 1.167-.24l-.035-.034Zm-2.71-1.219a2.304 2.304 0 0 1-.481-.721 2.292 2.292 0 0 1-.171-.927c0-.344.051-.636.154-.91a2.23 2.23 0 0 1 .446-.721 1.74 1.74 0 0 1 .687-.464c.274-.12.566-.172.875-.172a2.236 2.236 0 0 1 1.595.636c.189.206.343.446.446.72a2.5 2.5 0 0 1 .155.894c0 .36-.052.686-.172.961-.12.292-.274.532-.48.721a2.02 2.02 0 0 1-.687.464 2.19 2.19 0 0 1-.823.154 2.05 2.05 0 0 1-.841-.172 2.444 2.444 0 0 1-.703-.48v.017ZM207.94 80.419c.206.206.446.36.737.464.275.103.601.154.927.154.326 0 .635-.051.926-.172a2.11 2.11 0 0 0 .738-.48c.206-.206.36-.447.48-.739.121-.291.172-.618.172-.978v-3.726h-.806v3.709c0 .291-.052.532-.138.738-.085.206-.206.36-.343.498-.137.12-.291.223-.48.275a2.059 2.059 0 0 1-.566.085c-.189 0-.378-.034-.566-.085a1.213 1.213 0 0 1-.481-.275c-.137-.12-.24-.292-.326-.498-.086-.206-.12-.447-.12-.738v-3.709h-.823v3.726c0 .377.051.704.171.996.103.291.275.532.463.738l.035.017ZM217.324 80.951l-2.179-2.506c.223 0 .429-.052.635-.138.206-.085.378-.206.532-.36.154-.155.274-.344.377-.55a1.726 1.726 0 0 0 0-1.356 1.705 1.705 0 0 0-.96-.944 2.114 2.114 0 0 0-.755-.137h-1.905v5.974h.807v-2.798l2.384 2.798h1.03l.034.017Zm-3.431-3.159V75.75h.961c.188 0 .36.035.497.086.137.069.258.137.36.24a.615.615 0 0 1 .206.31.79.79 0 0 1 .069.326c0 .326-.103.583-.309.79-.206.206-.48.308-.858.308h-.943l.017-.017ZM220.79 81.054c.361 0 .704-.068 1.03-.206.326-.137.617-.326.858-.583.24-.24.446-.55.6-.876.155-.343.223-.721.223-1.116h-2.728v.773h1.785a1.923 1.923 0 0 1-.241.498c-.103.154-.24.274-.394.377a1.775 1.775 0 0 1-.515.24 2.31 2.31 0 0 1-.6.087c-.309 0-.584-.07-.841-.19a2.198 2.198 0 0 1-.686-.497 2.003 2.003 0 0 1-.464-.721 2.484 2.484 0 0 1-.171-.876c0-.343.051-.652.171-.944.103-.292.258-.532.464-.721.188-.206.429-.36.686-.464.257-.103.549-.172.841-.172.343 0 .651.052.909.155.257.103.532.257.789.463l.498-.6a3.674 3.674 0 0 0-.944-.601 3.308 3.308 0 0 0-1.235-.224c-.412 0-.79.07-1.15.224-.36.154-.686.36-.961.618a2.98 2.98 0 0 0-.652.978 3.36 3.36 0 0 0-.24 1.27 3.05 3.05 0 0 0 .944 2.25c.274.275.6.48.961.618.36.155.72.223 1.098.223l-.035.017ZM228.031 76.299a2.31 2.31 0 0 1 .669-.464c.257-.103.532-.172.823-.172.326 0 .618.052.875.172.258.12.498.275.704.498l.6-.55a2.878 2.878 0 0 0-.875-.686c-.343-.172-.789-.258-1.321-.258a2.98 2.98 0 0 0-1.184.24 2.844 2.844 0 0 0-1.527 1.631c-.154.378-.223.79-.223 1.22 0 .48.086.91.258 1.287.171.378.377.704.652.979.274.258.583.463.926.618.343.137.703.223 1.064.223.532 0 .995-.103 1.389-.326.395-.206.721-.48.944-.807l-.583-.515c-.258.309-.532.515-.841.635-.309.12-.6.19-.892.19-.223 0-.463-.052-.704-.138a2.34 2.34 0 0 1-.669-.43c-.205-.188-.36-.429-.497-.72-.137-.292-.189-.619-.189-1.014 0-.343.052-.652.172-.927.103-.274.257-.515.463-.72l-.034.034ZM236.026 75.75v-.773h-3.295v5.974h3.449v-.772h-2.642v-1.752h2.436v-.79h-2.436V75.75h2.488ZM241.051 79.2s0 .103.017.189c-.051-.086-.086-.137-.103-.172l-3.071-4.257h-.686v5.974h.806v-4.481c.052.086.086.138.103.155l3.106 4.326h.652V74.96h-.807v4.223l-.017.017ZM244.793 80.951V75.75h1.252v-.772h-3.276v.772h1.201v5.202h.823ZM251.192 80.951l-2.179-2.506c.223 0 .429-.052.635-.138a1.89 1.89 0 0 0 .549-.36c.155-.155.275-.344.378-.55.085-.206.137-.429.137-.67 0-.24-.052-.463-.137-.686a1.709 1.709 0 0 0-.961-.944 2.09 2.09 0 0 0-.738-.137h-1.904v5.974h.806v-2.798l2.385 2.798h1.029v.017Zm-3.431-3.159V75.75h.961c.188 0 .36.035.497.086.137.069.258.137.361.24a.62.62 0 0 1 .205.31.79.79 0 0 1 .069.326c0 .326-.103.583-.292.79-.206.206-.48.308-.84.308h-.944l-.017-.017ZM252.719 78.427h2.436v-.79h-2.436V75.75h2.488v-.772h-3.311v5.974h3.465v-.772h-2.642v-1.752ZM261.726 75.75v-.773h-2.916v5.974h.806v-2.523h1.99v-.773h-1.99v-1.906h2.11ZM265.449 81.054c.412 0 .807-.085 1.184-.24.36-.155.686-.378.961-.652.274-.275.48-.601.652-.98a3.16 3.16 0 0 0 .24-1.218 3.153 3.153 0 0 0-.841-2.198 2.878 2.878 0 0 0-.961-.652 3.254 3.254 0 0 0-1.252-.24c-.429 0-.824.085-1.184.24-.36.154-.686.378-.943.652-.275.275-.481.601-.618.979a3.153 3.153 0 0 0-.223 1.219c0 .446.086.876.24 1.253.154.378.378.704.652.979.275.275.601.48.961.652.377.155.772.24 1.184.24l-.052-.034Zm-2.024-2.18a2.293 2.293 0 0 1-.172-.927c0-.344.052-.636.154-.91.103-.275.258-.515.447-.721a1.73 1.73 0 0 1 .686-.464c.274-.12.566-.172.875-.172a2.233 2.233 0 0 1 1.595.636c.189.206.344.446.446.72.103.275.172.567.172.894 0 .36-.069.686-.172.961-.12.292-.274.532-.48.721-.206.206-.429.36-.686.464a2.2 2.2 0 0 1-.824.154c-.291 0-.566-.051-.84-.172a2.435 2.435 0 0 1-.704-.48 2.301 2.301 0 0 1-.48-.721l-.017.017ZM270.254 78.17l2.385 2.799h1.029l-2.179-2.507c.223 0 .429-.052.635-.138.206-.085.377-.206.532-.36.154-.155.274-.343.377-.55.086-.206.137-.429.137-.669 0-.24-.034-.464-.137-.687a1.736 1.736 0 0 0-.377-.566 1.723 1.723 0 0 0-.584-.378 2.11 2.11 0 0 0-.755-.137h-1.904v5.974h.806v-2.798l.035.017Zm0-2.404h.961c.188 0 .36.035.497.086.137.069.257.138.36.24a.75.75 0 0 1 .206.31c.035.12.069.223.069.326 0 .326-.103.584-.292.79-.206.206-.48.309-.858.309h-.943v-2.061ZM172.854 91.407c-.309.12-.601.19-.892.19a2.13 2.13 0 0 1-.704-.138 2.023 2.023 0 0 1-.669-.43 2.014 2.014 0 0 1-.498-.72c-.137-.292-.188-.619-.188-1.013 0-.344.051-.653.171-.928a2.23 2.23 0 0 1 .446-.72c.189-.19.412-.344.67-.464.257-.103.531-.172.806-.172.326 0 .618.052.875.172a2.2 2.2 0 0 1 .703.498l.601-.533a2.638 2.638 0 0 0-.875-.686c-.343-.172-.789-.258-1.321-.258-.429 0-.824.086-1.184.24-.36.155-.669.378-.927.653-.257.275-.463.6-.6.978-.154.378-.223.79-.223 1.22 0 .48.086.91.257 1.287.172.378.395.704.669.979.275.257.584.463.927.618.343.137.703.223 1.064.223.514 0 .995-.103 1.389-.326.395-.206.721-.48.944-.807l-.583-.515c-.258.292-.532.515-.841.635l-.017.017ZM179.94 87.115a2.878 2.878 0 0 0-.961-.652 3.254 3.254 0 0 0-2.453 0c-.36.154-.686.377-.944.652-.274.275-.48.6-.634.979a3.135 3.135 0 0 0-.223 1.219c0 .446.085.875.24 1.253.154.378.377.704.652.978.274.275.6.481.978.653a3.1 3.1 0 0 0 1.184.24c.411 0 .806-.085 1.166-.24.378-.155.686-.378.961-.653.274-.274.48-.6.652-.978a3.16 3.16 0 0 0 .24-1.22 3.153 3.153 0 0 0-.841-2.197l-.017-.034Zm-.171 3.125c-.12.274-.275.532-.481.72-.206.207-.429.361-.686.464a2.257 2.257 0 0 1-.823.155c-.275 0-.567-.052-.841-.172a2.226 2.226 0 0 1-.704-.48 2.318 2.318 0 0 1-.48-.722 2.292 2.292 0 0 1-.172-.927c0-.343.052-.635.155-.91.103-.274.257-.515.446-.72.189-.207.412-.361.686-.464.275-.12.566-.172.875-.172.309 0 .618.051.892.172.275.12.515.274.704.463.188.206.343.43.463.704.103.275.154.584.154.893 0 .36-.051.687-.171.961l-.017.035ZM185.602 90.531s0 .103.017.19c-.034-.087-.086-.138-.103-.172l-3.071-4.258h-.686v5.975h.806v-4.293s0-.103-.017-.206c.051.086.086.138.103.172l3.105 4.327h.652V86.29h-.806v4.24ZM187.335 87.098h1.201V92.3h.806v-5.202h1.253v-.79h-3.26v.79ZM192.326 89.759h2.436v-.773h-2.436v-1.888h2.488v-.79h-3.294V92.3h3.448v-.79h-2.642v-1.751ZM198.915 89.244l-2.231-2.919h-.686V92.3h.806v-4.55c.035.069.069.103.086.138l1.87 2.472h.326l1.853-2.524s.034-.069.086-.137V92.317h.806v-5.975h-.72l-2.162 2.92-.034-.018ZM206.207 86.84a2.254 2.254 0 0 0-.618-.395c-.24-.103-.515-.137-.806-.137h-1.767v5.975h.806V89.93h1.115c.24 0 .463-.051.686-.137a1.69 1.69 0 0 0 .567-.395c.154-.154.291-.36.394-.566.103-.223.155-.447.155-.687 0-.258-.052-.498-.138-.721a1.89 1.89 0 0 0-.377-.584h-.017Zm-.652 2.043a1.336 1.336 0 0 1-.841.275h-.892V87.08h.841c.377 0 .669.086.892.258.223.172.326.43.326.755 0 .344-.103.601-.326.79ZM212.606 87.115a2.899 2.899 0 0 0-.961-.652 3.26 3.26 0 0 0-1.253-.24c-.428 0-.823.085-1.183.24a2.807 2.807 0 0 0-.944.652c-.274.275-.48.6-.635.979a3.153 3.153 0 0 0-.223 1.219c0 .446.086.875.24 1.253.155.378.378.704.652.978.275.275.601.481.978.653.378.154.772.24 1.184.24.412 0 .806-.085 1.167-.24.377-.155.686-.378.961-.653.274-.274.48-.6.652-.978a3.16 3.16 0 0 0 .24-1.22 3.153 3.153 0 0 0-.841-2.197l-.034-.034Zm-.172 3.125c-.12.274-.274.532-.48.72-.206.207-.429.361-.687.464a2.257 2.257 0 0 1-.823.155c-.275 0-.566-.052-.841-.172a2.233 2.233 0 0 1-.703-.48 2.32 2.32 0 0 1-.481-.722 2.292 2.292 0 0 1-.171-.927c0-.343.051-.635.154-.91a2.23 2.23 0 0 1 .446-.72 1.74 1.74 0 0 1 .687-.464c.274-.12.566-.172.875-.172a2.236 2.236 0 0 1 1.595.635c.189.206.343.43.446.704.103.275.155.584.155.893 0 .36-.052.687-.172.961v.035ZM217.118 89.656c.206-.086.377-.206.532-.36a2.09 2.09 0 0 0 .377-.55 1.725 1.725 0 0 0 0-1.356 1.72 1.72 0 0 0-.377-.567 1.718 1.718 0 0 0-.583-.378 2.118 2.118 0 0 0-.755-.137h-1.905v5.975h.807v-2.799l2.384 2.799h1.03l-2.179-2.507c.223 0 .429-.051.635-.137l.034.017Zm-1.887-.515v-2.043h.961c.188 0 .36.034.497.103.137.068.257.137.36.223a.616.616 0 0 1 .206.309.79.79 0 0 1 .069.326c0 .326-.103.584-.292.79-.206.206-.48.309-.858.309h-.943v-.017ZM221.304 86.308l-2.265 5.975h.858l.703-1.94h1.888l.72 1.94h.892l-2.282-5.975h-.514Zm-.412 3.262.618-1.683s.017-.085.034-.154a.522.522 0 0 0 .051.154l.618 1.666h-1.321v.017ZM227.619 89.656c.206-.086.377-.206.532-.36a2.09 2.09 0 0 0 .377-.55c.086-.206.138-.43.138-.67 0-.24-.035-.463-.138-.686a1.736 1.736 0 0 0-.377-.567 1.718 1.718 0 0 0-.583-.378 2.118 2.118 0 0 0-.755-.137h-1.905v5.975h.807v-2.799l2.384 2.799h1.03l-2.179-2.507c.223 0 .429-.051.635-.137l.034.017Zm-1.887-.515v-2.043h.961c.188 0 .36.034.497.103.137.068.257.137.36.223a.75.75 0 0 1 .206.309c.035.12.069.223.069.326 0 .326-.103.584-.292.79-.206.206-.48.309-.858.309h-.943v-.017ZM231.565 88.54l-.103.171c-.034-.085-.068-.137-.086-.171l-1.424-2.232h-.943l2.024 3.193v2.782h.807V89.5l2.058-3.193h-.926l-1.424 2.232h.017ZM238.324 86.308l-2.264 5.975h.857l.721-1.94h1.887l.721 1.94h.892l-2.282-5.975h-.532Zm-.411 3.262.617-1.683s.034-.085.034-.154c.018.069.035.137.052.154l.618 1.666h-1.321v.017ZM245.787 90.531s0 .103.018.19c-.052-.087-.086-.138-.103-.172l-3.071-4.258h-.687v5.975h.807V87.767c.051.086.085.138.103.172l3.105 4.327h.652V86.29h-.806v4.223l-.018.017ZM251.655 87.183a2.839 2.839 0 0 0-.995-.635 3.65 3.65 0 0 0-1.339-.24h-1.509v5.975h1.441c.514 0 .96-.086 1.355-.24a2.93 2.93 0 0 0 1.012-.653c.275-.275.481-.584.635-.944.155-.361.223-.756.223-1.168 0-.412-.068-.79-.206-1.15a2.654 2.654 0 0 0-.617-.945Zm-.155 2.936a1.76 1.76 0 0 1-.446.721 2.528 2.528 0 0 1-.772.516c-.309.137-.686.188-1.132.188h-.532v-4.498h.686c.36 0 .686.052.961.172a2.09 2.09 0 0 1 1.201 1.185c.103.274.171.566.171.858 0 .275-.051.55-.137.824v.034ZM259.719 87.183c-.274-.274-.6-.48-.995-.635a3.648 3.648 0 0 0-1.338-.24h-1.51v5.975h1.441c.515 0 .961-.086 1.356-.24a2.95 2.95 0 0 0 1.012-.653 2.97 2.97 0 0 0 .635-.944c.137-.361.223-.756.223-1.168 0-.412-.069-.79-.206-1.15a2.656 2.656 0 0 0-.618-.945Zm-.154 2.936a1.973 1.973 0 0 1-.446.721 2.54 2.54 0 0 1-.772.516c-.309.137-.687.188-1.133.188h-.532v-4.498h.687c.36 0 .686.052.96.172a2.09 2.09 0 0 1 1.201 1.185c.103.274.172.566.172.858 0 .275-.052.55-.137.824v.034ZM262.327 86.308h-.806v5.975h.806v-5.975ZM266.272 90.377h1.785a1.92 1.92 0 0 1-.241.498c-.103.154-.24.275-.394.378a1.778 1.778 0 0 1-.515.24 2.31 2.31 0 0 1-.6.086c-.309 0-.584-.069-.841-.189a2.195 2.195 0 0 1-.686-.498 2.003 2.003 0 0 1-.464-.721 2.156 2.156 0 0 1-.171-.876c0-.343.051-.652.171-.944.103-.275.258-.532.464-.72.188-.207.429-.362.686-.465.257-.102.549-.171.841-.171.343 0 .652.051.909.154.257.103.532.258.789.464l.498-.601a3.671 3.671 0 0 0-.944-.6c-.343-.156-.755-.224-1.235-.224-.412 0-.789.069-1.15.223-.36.155-.686.36-.961.618a2.98 2.98 0 0 0-.652.979 3.36 3.36 0 0 0-.24 1.27 3.05 3.05 0 0 0 .944 2.25c.274.274.6.48.961.617.36.155.72.224 1.098.224.377 0 .703-.069 1.029-.206.326-.138.618-.327.858-.567.257-.24.446-.55.6-.893.155-.343.223-.72.223-1.116h-2.727v.773l-.035.017ZM270.699 86.308h-.806v5.975h.806v-5.975ZM274.885 86.308h-3.26v.79h1.201V92.3h.806v-5.202h1.253v-.79ZM277.029 86.308l-2.264 5.975h.857l.721-1.94h1.887l.721 1.94h.892l-2.282-5.975h-.532Zm-.411 3.262.617-1.683s.035-.085.035-.154a.522.522 0 0 0 .051.154l.618 1.666h-1.321v.017ZM281.438 86.308h-.806V92.3h3.054v-.79h-2.248v-5.202ZM290.584 88.935h-2.831v-2.627h-.807V92.3h.807v-2.575h2.831V92.3h.823v-5.992h-.823v2.627ZM293.415 86.308h-.807v5.975h.807v-5.975ZM297.497 89.57a2.287 2.287 0 0 0-.446-.36 4.655 4.655 0 0 0-.498-.275 7.226 7.226 0 0 1-.514-.258c-.155-.085-.292-.154-.412-.257a.948.948 0 0 1-.275-.31.822.822 0 0 1-.103-.411.59.59 0 0 1 .258-.515.989.989 0 0 1 .6-.172c.24 0 .464.034.635.086.172.051.36.154.532.292l.446-.67a2.59 2.59 0 0 0-.755-.378 2.78 2.78 0 0 0-.841-.137c-.274 0-.497.034-.72.12a1.387 1.387 0 0 0-.532.326 1.445 1.445 0 0 0-.343.498c-.086.19-.12.395-.12.618 0 .275.051.533.154.722.103.206.223.377.395.515.154.137.343.274.549.377.206.103.412.224.617.326.138.07.258.138.378.207.12.068.223.154.309.24.085.086.154.172.206.275a.732.732 0 0 1 .085.343c0 .292-.103.498-.274.635-.189.138-.429.206-.738.206-.103 0-.206 0-.326-.034a2.28 2.28 0 0 1-.326-.086 2.414 2.414 0 0 1-.309-.137c-.103-.052-.188-.12-.274-.19l-.463.636c.274.223.549.395.84.48.292.087.584.138.892.138.258 0 .481-.034.704-.103.223-.068.412-.189.566-.326.172-.137.292-.326.395-.532a1.57 1.57 0 0 0 .154-.704 1.525 1.525 0 0 0-.446-1.133v-.052ZM298.441 87.098h1.201V92.3h.824v-5.202h1.252v-.79h-3.277v.79ZM307.191 87.115a2.878 2.878 0 0 0-.961-.652 3.254 3.254 0 0 0-2.453 0c-.36.154-.686.377-.944.652-.274.275-.48.6-.634.979a3.135 3.135 0 0 0-.223 1.219c0 .446.068.875.24 1.253.171.378.377.704.652.978.274.275.6.481.978.653.377.154.772.24 1.183.24.412 0 .807-.085 1.167-.24.378-.155.686-.378.961-.653.274-.274.497-.6.652-.978a3.16 3.16 0 0 0 .24-1.22 3.153 3.153 0 0 0-.841-2.197l-.017-.034Zm-.171 3.125c-.12.274-.275.532-.481.72-.206.207-.429.361-.686.464a2.193 2.193 0 0 1-.824.155c-.291 0-.566-.052-.84-.172a2.435 2.435 0 0 1-.704-.48 2.318 2.318 0 0 1-.48-.722 2.292 2.292 0 0 1-.172-.927c0-.343.052-.635.155-.91.103-.274.257-.515.446-.72.189-.207.412-.361.686-.464.258-.12.566-.172.875-.172.309 0 .618.051.892.172.275.12.498.274.704.463.188.206.343.43.446.704.103.275.154.584.154.893 0 .36-.051.687-.171.961v.035ZM311.704 89.656c.206-.086.377-.206.532-.36a2.09 2.09 0 0 0 .377-.55c.086-.206.137-.43.137-.67 0-.24-.034-.463-.137-.686a1.736 1.736 0 0 0-.377-.567 1.723 1.723 0 0 0-.584-.378 2.108 2.108 0 0 0-.754-.137h-1.905v5.975h.807v-2.799l2.384 2.799h1.03l-2.179-2.507c.223 0 .429-.051.635-.137l.034.017Zm-1.887-.515v-2.043h.96c.189 0 .361.034.498.103.137.068.257.137.36.223a.616.616 0 0 1 .206.309.79.79 0 0 1 .069.326c0 .326-.103.584-.292.79-.206.206-.48.309-.858.309h-.943v-.017ZM317.074 86.308l-1.424 2.232-.103.171c-.034-.085-.068-.137-.086-.171l-1.424-2.232h-.943l2.024 3.193v2.782h.807V89.5l2.058-3.193h-.926.017ZM169.303 74.977v5.974h3.054v-.772h-2.248v-5.202h-.806ZM219.95 41.497h-2.951v19.315h2.282c7.583 0 10.774-4.91 10.774-9.683 0-5.236-3.963-9.614-10.105-9.614v-.018Z" />
          <path d="M263.767 31.797h-94.534v36.861h94.534V31.797Zm-76.313 32.586c-6.245 0-12.559-5.082-12.559-13.237 0-7.4 5.336-13.237 12.696-13.237 4.632 0 7.395 1.58 9.471 4l-2.591 2.318c-1.75-1.82-3.998-2.884-6.811-2.884-4.976 0-9.128 3.863-9.128 9.717 0 6.593 5.044 9.872 8.973 9.872 2.454 0 5.336-.978 7.515-3.536l2.522 2.18c-1.973 2.73-5.61 4.807-10.105 4.807h.017Zm22.355-12.12h-9.934l6.486-8.208c.857-1.081.977-1.82.977-2.369 0-2.112-1.732-2.661-2.745-2.661-1.99 0-2.779 1.356-2.779 2.901h-1.99c0-3.193 2.093-4.858 4.769-4.858 2.402 0 4.804 1.287 4.804 4.618 0 1.047-.343 2.215-1.286 3.382l-4.272 5.271h5.953v1.94l.017-.017Zm9.899 11.691h-6.21V38.321h6.519c8.733 0 13.674 5.752 13.674 12.74 0 6.987-5.233 12.876-14 12.876l.017.017Zm37.505 0h-3.5V52.932h-12.284v11.022h-3.5V38.321h3.5v11.297h12.284V38.321h3.5v25.633ZM8.561 65.585h-1.32v6.027c0 1.854-1.219 2.575-2.489 2.575-1.27 0-2.436-.704-2.436-2.575v-6.027H.996v6.027c0 2.386 1.56 3.828 3.774 3.828 2.213 0 3.791-1.51 3.791-3.828v-6.027ZM18.787 65.585h-1.321v6.85c0 .12.034.327.034.327s-.086-.172-.171-.275l-5.01-6.885h-1.133v9.684h1.322v-6.97c0-.104-.035-.327-.035-.327s.12.189.172.274l5.078 7.023h1.064V65.585ZM22.802 65.585H21.48v9.684h1.322v-9.684ZM31.19 65.585l-2.47 6.988c-.034.12-.085.343-.085.343s-.035-.206-.086-.343l-2.454-6.988H24.81l3.414 9.684h.823l3.397-9.684h-1.27.018ZM39.872 66.838v-1.253h-5.404v9.684h5.661v-1.254h-4.34v-2.85h3.997V69.93H35.79v-3.09h4.083ZM48.622 68.435c0-1.562-1.201-2.85-3.003-2.85h-3.14v9.684h1.322v-4.533l3.911 4.532h1.699l-3.569-4.051c1.441 0 2.762-1.22 2.762-2.782h.018Zm-4.804 1.734v-3.33h1.578c1.253 0 1.853.892 1.853 1.545 0 1.03-.686 1.785-1.887 1.785h-1.544ZM53.649 74.135c-.67 0-1.493-.257-2.007-.72l-.755 1.03c.892.72 1.853.978 2.848.978 1.612 0 2.968-.979 2.968-2.73 0-1.631-1.167-2.335-2.265-2.867-1.2-.601-2.127-.962-2.127-2.009 0-.738.635-1.116 1.39-1.116.806 0 1.303.172 1.904.618l.72-1.099a4.498 4.498 0 0 0-2.625-.824c-1.732 0-2.796 1.065-2.796 2.507 0 1.854 1.407 2.455 2.796 3.159.858.446 1.613.893 1.613 1.717 0 .91-.669 1.356-1.664 1.356ZM60.186 65.585h-1.32v9.684h1.32v-9.684ZM65.676 75.269v-8.43h2.059v-1.254h-5.353v1.254h1.973v8.43h1.32ZM69.93 75.269h5.662v-1.254h-4.34v-2.85h3.997V69.93h-3.997v-3.09h4.083v-1.254h-5.404v9.684ZM73.019 62.855l-1.236 1.958h1.27l1.235-1.958h-1.27ZM85.766 65.585h-2.47v9.683h2.35c3.312 0 5.285-2.18 5.285-4.876 0-2.695-1.87-4.824-5.182-4.824l.017.017Zm-.274 8.499h-.858v-7.297h1.115c2.317 0 3.826 1.648 3.826 3.64 0 1.802-1.2 3.674-4.066 3.674l-.017-.017ZM93.16 65.585v6.027c0 2.386 1.545 3.828 3.775 3.828s3.792-1.51 3.792-3.828v-6.027h-1.321v6.027c0 1.854-1.218 2.575-2.488 2.575s-2.436-.704-2.436-2.575v-6.027h-1.338.017ZM101.739 57.722H0v1.39h101.739v-1.39ZM2.369 82.428H1.03v9.683h5.01v-1.236H2.369v-8.447ZM14.807 88.454c0 1.872-1.219 2.576-2.471 2.576S9.9 90.326 9.9 88.454v-6.026H8.562v6.026c0 2.404 1.56 3.829 3.791 3.829 2.23 0 3.792-1.511 3.792-3.829v-6.026h-1.321v6.026h-.017ZM26.575 82.428h-1.527l-1.87 2.833c-.171.257-.326.532-.326.532s-.154-.275-.309-.498l-1.852-2.867h-1.63l2.968 4.584-3.363 5.116h1.544l2.145-3.279c.188-.275.446-.704.446-.704s.257.447.412.67l2.161 3.313h1.596l-3.363-5.185 2.951-4.515h.017ZM30.933 88.025h3.998v-1.253h-3.998v-3.09h4.084v-1.254h-5.405v9.683h5.662v-1.236h-4.34v-2.85ZM43.406 87.166l-3.654-4.738h-1.133v9.7h1.321v-7.022c0-.171-.034-.36-.034-.36s.086.137.137.206l3.054 4h.532l3.037-4.103.137-.24s-.034.205-.034.377v7.125h1.32v-9.7h-1.183l-3.534 4.738.034.017ZM56.068 87.184c.618-.395 1.116-1.116 1.116-2.232 0-1.511-1.167-2.524-2.814-2.524h-2.556v9.7h2.916c2.128 0 2.985-1.425 2.985-2.627 0-1.201-.875-2.077-1.63-2.317h-.017Zm-2.933-3.503h1.012c1.08 0 1.664.515 1.664 1.374 0 .807-.326 1.682-1.767 1.682h-.892v-3.073l-.017.017Zm1.424 7.194h-1.424v-2.884h1.56c.979 0 1.614.549 1.614 1.39 0 .893-.55 1.477-1.75 1.477v.017ZM64.835 82.273c-2.796 0-4.906 2.146-4.906 4.98 0 2.832 2.196 5.03 4.975 5.03 2.78 0 4.959-2.18 4.959-5.014 0-2.832-2.008-4.996-5.01-4.996h-.017Zm.07 8.705c-1.905 0-3.587-1.58-3.587-3.726s1.442-3.674 3.535-3.674 3.62 1.563 3.62 3.657c0 2.318-1.682 3.76-3.569 3.76v-.017ZM78.732 88.454c0 1.872-1.218 2.576-2.488 2.576s-2.436-.704-2.436-2.576v-6.026H72.47v6.026c0 2.404 1.544 3.829 3.774 3.829s3.792-1.511 3.792-3.829v-6.026h-1.321v6.026h.017ZM89.181 85.278c0-1.563-1.2-2.85-3.002-2.85h-3.14v9.7h1.338v-4.532l3.912 4.532h1.698L86.42 88.06c1.441 0 2.762-1.219 2.762-2.764v-.017Zm-4.804 1.717v-3.331h1.562c1.252 0 1.853.893 1.853 1.562 0 1.03-.687 1.769-1.888 1.769H84.36h.017ZM96.455 89.02h2.917c-.343 1.168-1.459 1.958-2.848 1.958-1.973 0-3.569-1.734-3.569-3.691 0-2.25 1.561-3.726 3.517-3.726 1.133 0 1.939.309 2.78.996l.806-.979c-.927-.807-2.007-1.305-3.569-1.305-2.659 0-4.924 2.01-4.924 4.996 0 2.988 2.454 5.014 4.907 5.014 2.454 0 4.444-1.872 4.444-4.499h-4.46v1.237ZM48.52 17.306c-1.425 0-2.66-.806-3.278-2.043h-.428v32.295a3.714 3.714 0 0 0 3.705 3.709c2.042 0 3.689-1.666 3.689-3.709V15.263h-.412a3.615 3.615 0 0 1-3.277 2.043ZM48.52 13.563a3.703 3.703 0 0 0 3.705-3.708 3.714 3.714 0 0 0-3.706-3.709 3.714 3.714 0 0 0-3.706 3.709 3.714 3.714 0 0 0 3.706 3.708ZM4.701 51.267h3.706V18.955A3.699 3.699 0 0 0 4.7 15.263a3.699 3.699 0 0 0-3.706 3.692v28.603a3.703 3.703 0 0 0 3.706 3.709ZM11.958 51.267c2.041 0 3.671-1.94 3.706-3.967 0 1.958.411 3.967 2.144 3.967V18.955a3.688 3.688 0 0 0-3.706-3.692 3.688 3.688 0 0 0-3.706 3.692v32.312h1.562ZM36.03 51.266a3.703 3.703 0 0 0 3.705-3.708V18.954a3.714 3.714 0 0 0-3.706-3.708h-3.706v32.312a3.714 3.714 0 0 0 3.706 3.708ZM26.628 51.266a3.703 3.703 0 0 0 3.706-3.708V15.246h-1.562c-2.024 0-3.671 1.957-3.705 3.983 0-1.974-.412-3.966-2.145-3.983v32.312a3.714 3.714 0 0 0 3.706 3.708ZM75.164 51.266a3.714 3.714 0 0 0 3.706-3.708V6.095h-.412c-.618 1.236-1.853 2.06-3.277 2.06a3.656 3.656 0 0 1-3.294-2.06h-.429v41.463a3.706 3.706 0 0 0 3.723 3.708h-.017ZM87.67 51.266h3.706V18.954a3.714 3.714 0 0 0-3.705-3.708 3.714 3.714 0 0 0-3.706 3.708v28.604a3.714 3.714 0 0 0 3.706 3.708ZM94.927 51.266c2.025 0 3.672-1.94 3.706-3.983 0 1.957.412 3.966 2.145 3.983V18.954a3.714 3.714 0 0 0-3.706-3.708 3.714 3.714 0 0 0-3.706 3.708v32.312h1.561ZM61.866 51.266a3.714 3.714 0 0 0 3.706-3.708 3.714 3.714 0 0 0-3.706-3.709 3.714 3.714 0 0 0-3.706 3.709 3.714 3.714 0 0 0 3.706 3.708Z" />
        </svg>
      </div>
    </a>
  )
}

export default LogoUni
