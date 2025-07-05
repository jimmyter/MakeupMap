import {Card, CardContent} from "@/components/ui/card"

import styles from './InfoPage.module.css'
import { Clock } from "lucide-react";

export default function InfoPageEyes() {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Eyes</h2>

      <p className={styles.paragraph}>
        Eyes are the focal point of most makeup looks. From soft neutrals to
        bold neons, eye makeup defines mood and intention. Techniques like
        tightlining, winged liner, and cut creases open up the eyes and add
        drama.
      </p>

      <div className="text-sm text-gray-500 mb-6">
        <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />8 min read
        </span>
      </div>

      <img src="/eyes.jpg" alt="Eyes" className="mb-4 max-w-sm w-full" />
      
      <p className={styles.paragraph}>
        Mascara lifts and lengthens lashes, making the eyes appear larger. For
        advanced looks, falsies or lash extensions may be used. Blending is key
        — smooth transitions between shadow colors elevate your look.
      </p>
      
      <Card className="bg-pink-50 border-pink-200 mb-6">
          <CardContent className="pt-4">
            <p className="text-pink-800 font-medium mb-2">💡 Pro Tip:</p>
            <p className="text-pink-700">
              Don’t forget the lower lash line — smudging color here creates balance.
              Eye-safe glitter and shimmer can be used for festival or party styles.
            </p>
          </CardContent>
        </Card>

      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
        ante arcu. Maecenas molestie tristique fermentum. Nam sit amet tempor
        urna. Proin dictum est erat. Nulla ac lacinia diam, nec posuere massa.
        Suspendisse velit metus, feugiat nec finibus ut, efficitur in leo. Nunc
        ac ante non est faucibus gravida. Duis cursus nulla felis, eu ultrices
        ex rutrum eget. Sed commodo urna ut finibus sollicitudin. Maecenas eget
        dui laoreet, gravida libero nec, posuere odio. Duis hendrerit sed nunc
        non auctor. In ligula lectus, faucibus sit amet quam vel, maximus varius
        tellus. Etiam lobortis, eros nec pharetra efficitur, mauris ligula
        maximus lorem, eu semper libero mauris a felis. Maecenas dolor tellus,
        dictum at nulla in, feugiat consectetur dolor. Donec ullamcorper ipsum
        nec egestas scelerisque. Aenean vulputate consequat justo, vel dapibus
        nisl efficitur sed. Nullam eu sem maximus, suscipit justo in, pulvinar
        nisl. Maecenas auctor nisl lacus. Integer eu elit tincidunt nisi
        porttitor efficitur in non odio. Phasellus pulvinar ultrices auctor.
        Vestibulum lacinia non risus ut aliquam. Mauris nec quam elit. Duis
        posuere molestie euismod. Pellentesque mauris odio, commodo eu sodales
        ut, ornare non turpis. Nullam a nisi lorem. Suspendisse blandit, lorem
        sit amet ultrices mattis, metus arcu faucibus orci, rutrum eleifend quam
        mi ac eros. Nam bibendum quis purus id ultricies. Mauris ullamcorper,
        leo placerat aliquet auctor, magna magna rutrum metus, a efficitur erat
        turpis ac libero. Curabitur commodo tempus diam a cursus. Donec vel
        lorem sed mi lacinia sollicitudin. Maecenas faucibus fermentum massa vel
        imperdiet. Suspendisse facilisis, elit eget vehicula porttitor, nisi
        orci porttitor mauris, vitae efficitur quam tellus non eros. Morbi
        aliquet nibh et euismod rhoncus. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Cras dignissim
        erat odio, id tincidunt eros efficitur a. Ut in ex ut dolor mattis
        lacinia. Vivamus non suscipit justo. Ut ut nisl eget leo tristique
        lobortis. Mauris tristique orci in magna lobortis tincidunt commodo
        consequat eros. Pellentesque quis posuere eros. Nullam feugiat mauris
        eget ultricies accumsan. Praesent feugiat sem sit amet tempor lacinia.
        Praesent pulvinar massa sit amet ante eleifend ornare. Integer euismod,
        purus non vestibulum efficitur, tortor urna convallis leo, et cursus
        lorem odio eu nulla. Phasellus vestibulum nunc a ante aliquet, a sodales
        arcu venenatis. Pellentesque semper dictum imperdiet. Vestibulum aliquet
        ultrices sem, non ornare metus euismod vitae. In dictum libero non
        fringilla mollis. Etiam aliquet aliquam velit eu vestibulum. Nullam
        ornare vehicula ultrices. Nulla eleifend, purus ultrices pretium
        ultrices, mi ipsum sodales lectus, eu pharetra felis metus vitae quam.
        Maecenas nulla est, dignissim eget nulla id, molestie fermentum leo.
        Vestibulum magna ante, fringilla eget dapibus at, interdum suscipit sem.
        In at ipsum luctus, blandit risus id, porttitor nunc. Pellentesque
        molestie semper eleifend. Sed dictum pretium hendrerit. Mauris at
        interdum orci. Duis eget diam porttitor ante ullamcorper rutrum in ut
        magna. Vestibulum vitae ante a lectus egestas convallis. Fusce eget orci
        ac dolor feugiat auctor. Vivamus ex metus, congue sed tortor non,
        ullamcorper vulputate neque. Curabitur ac purus lectus. Aenean facilisis
        quam vel lectus commodo cursus. Aenean suscipit at orci sed tincidunt.{' '}
      </p>
      <ul className="mt-4 list-disc list-inside">
        <li>
          <a
            href="https://example.com/smokey-eye"
            target="_blank"
            className="text-blue-600 underline"
          >
            Smokey Eye Tutorial
          </a>
        </li>
        <li>
          <a
            href="https://example.com/eyeliner-types"
            target="_blank"
            className="text-blue-600 underline"
          >
            Different Eyeliner Styles
          </a>
        </li>
      </ul>
    </div>
  );
}
